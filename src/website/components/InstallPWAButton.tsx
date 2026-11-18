import React, { useState, useEffect } from 'react';
import { Download, ArrowUpRight, X, Smartphone, Monitor, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { WebsiteRoute } from '../routes';

interface InstallPWAButtonProps {
  onNavigate: (route: WebsiteRoute) => void;
  label?: string;
  installedLabel?: string;
  variant?: 'primary' | 'secondary' | 'header';
  className?: string;
}

/**
 * Prominent Install button for the Kristu mu Nyimbo hymnal PWA.
 * - Triggers the native PWA installation prompt on supported browsers.
 * - Shows "OPEN KRISTU MU NYIMBO" when the app is already installed.
 * - Never claims installation succeeded unless confirmed by the browser.
 * - Provides device/browser-specific install guidance when native prompting is unavailable.
 */
export const InstallPWAButton: React.FC<InstallPWAButtonProps> = ({
  onNavigate,
  label = 'INSTALL KRISTU MU NYIMBO',
  installedLabel = 'OPEN KRISTU MU NYIMBO',
  variant = 'primary',
  className = '',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [installNotice, setInstallNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!isGuideOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsGuideOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGuideOpen]);

  const handleInstallClick = async () => {
    setInstallNotice(null);
    if (isInstallable) {
      const result = await install();
      if (result === 'accepted') {
        setInstallNotice('Kristu mu Nyimbo has been installed on your device.');
      } else if (result === 'dismissed') {
        setInstallNotice('Installation was cancelled. You can install Kristu mu Nyimbo anytime.');
      } else {
        setIsGuideOpen(true);
      }
      return;
    }
    setIsGuideOpen(true);
  };

  const baseStyles =
    variant === 'header'
      ? 'px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-b from-[#1565C0] to-[#0B3B8C] hover:from-[#1976D2] hover:to-[#0D47A1] text-white text-xs sm:text-sm font-semibold shadow-sm'
      : variant === 'primary'
      ? 'px-6 py-3 rounded-full bg-gradient-to-b from-[#1565C0] to-[#0B3B8C] hover:from-[#1976D2] hover:to-[#0D47A1] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md'
      : 'px-6 py-3 rounded-full border border-[#0B3B8C]/40 dark:border-blue-400/40 bg-white dark:bg-slate-900 hover:bg-[#F2F6FC] dark:hover:bg-slate-800 text-[#0B2E6B] dark:text-blue-200 text-xs sm:text-sm font-semibold shadow-xs';

  if (isInstalled) {
    return (
      <div className={className.includes('w-full') ? 'w-full flex flex-col gap-1.5' : 'inline-flex flex-col items-start gap-1.5'}>
        <a
          href="/app"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/app');
          }}
          className={`inline-flex items-center justify-center gap-2 transition-all whitespace-nowrap ${baseStyles} ${className}`}
        >
          <span>{installedLabel}</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </a>
        {installNotice && (
          <p role="status" className="inline-flex items-center gap-1.5 text-xs text-emerald-800 dark:text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>{installNotice}</span>
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      <div className={className.includes('w-full') ? 'w-full flex flex-col gap-1.5' : 'inline-flex flex-col items-start gap-1.5'}>
        <button
          type="button"
          onClick={handleInstallClick}
          className={`inline-flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap ${baseStyles} ${className}`}
        >
          <Download
            className={`w-4 h-4 shrink-0 ${
              variant === 'secondary' ? 'text-[#0B3B8C] dark:text-blue-300' : 'text-white'
            }`}
          />
          <span>{label}</span>
        </button>

        {installNotice && (
          <p role="status" className="text-xs text-slate-600 dark:text-slate-400">
            {installNotice}
          </p>
        )}
      </div>

      {isGuideOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="install-pwa-dialog-title"
          onClick={() => setIsGuideOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-5 text-left"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2
                  id="install-pwa-dialog-title"
                  className="font-serif text-lg font-bold text-[#0B2E6B] dark:text-white"
                >
                  Install Kristu mu Nyimbo
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Your browser did not display an automatic install prompt. Follow the steps for your device to install the Kristu mu Nyimbo hymnal app.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsGuideOpen(false)}
                aria-label="Close install instructions"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              {isIOS ? (
                <div className="p-4 rounded-xl bg-[#F2F6FC] dark:bg-slate-800/60 border border-[#DCE7F7] dark:border-slate-700 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[#0B2E6B] dark:text-white">
                    <Smartphone className="w-4 h-4 text-[#1565C0] dark:text-blue-400 shrink-0" />
                    <span>iPhone &amp; iPad (Safari)</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm leading-relaxed">
                    <li>
                      First, tap <strong>Open Hymnal App</strong> below so you are inside the hymnal application.
                    </li>
                    <li>
                      Tap the <strong>Share</strong> button in Safari&apos;s toolbar.
                    </li>
                    <li>
                      Select <strong>Add to Home Screen</strong>, then tap <strong>Add</strong> so the app opens directly into the hymnal.
                    </li>
                  </ol>
                </div>
              ) : (
                <>
                  <div className="p-4 rounded-xl bg-[#F2F6FC] dark:bg-slate-800/60 border border-[#DCE7F7] dark:border-slate-700 space-y-2">
                    <div className="flex items-center gap-2 font-semibold text-[#0B2E6B] dark:text-white">
                      <Smartphone className="w-4 h-4 text-[#1565C0] dark:text-blue-400 shrink-0" />
                      <span>Android (Chrome / Edge)</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      Open this site in Chrome or Edge, tap the browser menu (⋮), and choose <strong>Install app</strong>. The installed Kristu mu Nyimbo app will open directly into the hymnal.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F2F6FC] dark:bg-slate-800/60 border border-[#DCE7F7] dark:border-slate-700 space-y-2">
                    <div className="flex items-center gap-2 font-semibold text-[#0B2E6B] dark:text-white">
                      <Monitor className="w-4 h-4 text-[#1565C0] dark:text-blue-400 shrink-0" />
                      <span>Windows &amp; Mac (Chrome / Edge)</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      Click the <strong>Install</strong> icon on the right side of the browser address bar and confirm <strong>Install</strong> to add Kristu mu Nyimbo to your desktop and app launcher.
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setIsGuideOpen(false);
                  onNavigate('/app');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#0B3B8C]/40 dark:border-slate-700 hover:bg-[#F2F6FC] dark:hover:bg-slate-800 text-[#0B2E6B] dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>Open Hymnal App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsGuideOpen(false)}
                className="px-5 py-2 rounded-full bg-[#0B3B8C] hover:bg-[#0D47A1] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
