import { useEffect, useState, useCallback } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

declare global {
  interface Window {
    __kmnDeferredInstallPrompt?: BeforeInstallPromptEvent | null;
  }
}

// Capture beforeinstallprompt globally as early as possible so navigating
// between website pages never loses the browser's install prompt event.
if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    window.__kmnDeferredInstallPrompt = e as BeforeInstallPromptEvent;
  });
}

export type PWAInstallResult = 'accepted' | 'dismissed' | 'unavailable';

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(() =>
    typeof window !== 'undefined' ? window.__kmnDeferredInstallPrompt || null : null
  );
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Detect standalone display mode
    const standaloneQuery = window.matchMedia('(display-mode: standalone)');
    const checkStandalone = () => {
      const isStandalone =
        standaloneQuery.matches ||
        (window.navigator as unknown as { standalone?: boolean }).standalone === true;
      if (isStandalone) {
        setIsInstalled(true);
      }
    };
    checkStandalone();

    // 2. Detect installed PWA in Chromium browsers via getInstalledRelatedApps
    const navWithRelated = window.navigator as Navigator & {
      getInstalledRelatedApps?: () => Promise<Array<{ platform?: string; url?: string }>>;
    };
    if (typeof navWithRelated.getInstalledRelatedApps === 'function') {
      navWithRelated
        .getInstalledRelatedApps()
        .then((apps) => {
          if (Array.isArray(apps) && apps.length > 0) {
            setIsInstalled(true);
          }
        })
        .catch(() => {
          // Ignore unsupported environments
        });
    }

    // 3. Detect iOS/iPadOS devices
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice =
      /iphone|ipad|ipod/.test(userAgent) ||
      (userAgent.includes('mac') && 'ontouchend' in document);
    setIsIOS(isIOSDevice);

    // 4. Sync with globally captured prompt if it already fired
    if (window.__kmnDeferredInstallPrompt) {
      setDeferredPrompt(window.__kmnDeferredInstallPrompt);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      window.__kmnDeferredInstallPrompt = promptEvent;
      setDeferredPrompt(promptEvent);
      window.dispatchEvent(new CustomEvent('kmn-pwa-prompt-change'));
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      window.__kmnDeferredInstallPrompt = null;
      window.dispatchEvent(new CustomEvent('kmn-pwa-installed'));
    };

    const handleSyncInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    const handleSyncPrompt = () => {
      setDeferredPrompt(window.__kmnDeferredInstallPrompt || null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('kmn-pwa-installed', handleSyncInstalled);
    window.addEventListener('kmn-pwa-prompt-change', handleSyncPrompt);
    standaloneQuery.addEventListener?.('change', checkStandalone);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('kmn-pwa-installed', handleSyncInstalled);
      window.removeEventListener('kmn-pwa-prompt-change', handleSyncPrompt);
      standaloneQuery.removeEventListener?.('change', checkStandalone);
    };
  }, []);

  const install = useCallback(async (): Promise<PWAInstallResult> => {
    const promptEvent = deferredPrompt || window.__kmnDeferredInstallPrompt;
    if (!promptEvent) return 'unavailable';

    try {
      await promptEvent.prompt();
      const { outcome } = await promptEvent.userChoice;
      window.__kmnDeferredInstallPrompt = null;
      setDeferredPrompt(null);
      window.dispatchEvent(new CustomEvent('kmn-pwa-prompt-change'));

      if (outcome === 'accepted') {
        setIsInstalled(true);
        window.dispatchEvent(new CustomEvent('kmn-pwa-installed'));
        return 'accepted';
      }
      return 'dismissed';
    } catch {
      return 'unavailable';
    }
  }, [deferredPrompt]);

  return {
    isInstallable: !!deferredPrompt,
    isInstalled,
    isIOS,
    install,
  };
}
