import React, { Suspense, lazy, useState, useEffect, useCallback } from 'react';
import { AdventistLogo } from './components/AdventistLogo';
import { applyThemeToDOM, getStoredThemePreference } from './utils/theme';
import { WebsiteRoute, normalizeRoute } from './website/routes';
import { isSafeInternalRoute } from './website/security';
import { WebsiteLayout } from './website/WebsiteLayout';
import { HomePage } from './website/pages/HomePage';
import { OpenAppPage } from './website/pages/OpenAppPage';
import { AboutPage } from './website/pages/AboutPage';
import { FaqPage } from './website/pages/FaqPage';
import { FeedbackPage } from './website/pages/FeedbackPage';
import { UpdatesPage } from './website/pages/UpdatesPage';
import { AcknowledgementsPage } from './website/pages/AcknowledgementsPage';
import { ContactPage } from './website/pages/ContactPage';
import { HelpSupportPage } from './website/pages/HelpSupportPage';
import { PrivacyPolicyPage } from './website/pages/PrivacyPolicyPage';
import { TermsPage } from './website/pages/TermsPage';
import { SupportProjectPage } from './website/pages/SupportProjectPage';

const HymnalApp = lazy(() => import('./App'));
const ProjectorDisplayPage = lazy(() => import('./components/ProjectorDisplayPage'));

function getInitialRoute(): WebsiteRoute {
  if (typeof window === 'undefined') return '/';
  const pathname = normalizeRoute(window.location.pathname);

  // If launched as an installed standalone PWA on "/", open the hymnal app directly
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as unknown as { standalone?: boolean }).standalone === true;

  if (isStandalone && pathname === '/') {
    return '/app';
  }
  return pathname;
}

const ROUTE_TITLES: Record<WebsiteRoute, string> = {
  '/': 'Kristu mu Nyimbo — Multilingual SDA Hymnal & Bible',
  '/open-app': 'Open & Install App — Kristu mu Nyimbo',
  '/about': 'About Us — Kristu mu Nyimbo',
  '/faq': 'Frequently Asked Questions — Kristu mu Nyimbo',
  '/feedback': 'Feedback & Suggestions — Kristu mu Nyimbo',
  '/updates': 'Updates & Announcements — Kristu mu Nyimbo',
  '/acknowledgements': 'Acknowledgements — Kristu mu Nyimbo',
  '/contact': 'Contact Us — Kristu mu Nyimbo',
  '/help': 'Help & Support — Kristu mu Nyimbo',
  '/privacy': 'Privacy Policy — Kristu mu Nyimbo',
  '/terms': 'Terms & Conditions — Kristu mu Nyimbo',
  '/support': 'Support the Project — Kristu mu Nyimbo',
  '/app': 'Kristu mu Nyimbo — Hymnal & Bible',
  '/projector': 'Projector Display — Kristu mu Nyimbo',
};

export const SiteRouter: React.FC = () => {
  const [route, setRoute] = useState<WebsiteRoute>(() => getInitialRoute());

  useEffect(() => {
    applyThemeToDOM(getStoredThemePreference());
    const handleStorageSync = (e: StorageEvent) => {
      if (e.key === 'hymnal_theme_pref') {
        applyThemeToDOM(getStoredThemePreference());
      }
    };
    window.addEventListener('storage', handleStorageSync);
    return () => window.removeEventListener('storage', handleStorageSync);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.title = ROUTE_TITLES[route] || 'Kristu mu Nyimbo';
    if (route === '/app' && window.location.pathname === '/') {
      window.history.replaceState({}, '', '/app');
    }
  }, [route]);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(normalizeRoute(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((nextRoute: WebsiteRoute) => {
    if (!isSafeInternalRoute(nextRoute)) return;
    if (typeof window !== 'undefined' && window.location.pathname !== nextRoute) {
      window.history.pushState({}, '', nextRoute);
    }
    setRoute(nextRoute);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  if (route === '/projector') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <ProjectorDisplayPage />
      </Suspense>
    );
  }

  if (route === '/app') {
    return (
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#F3F7FD] dark:bg-slate-950 text-[#0B2E6B] dark:text-slate-100 flex flex-col items-center justify-center p-6 gap-4">
            <div className="w-12 h-12 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-[#DCE7F7] dark:border-slate-800 shadow-sm flex items-center justify-center">
              <AdventistLogo className="w-full h-full" />
            </div>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Loading Kristu mu Nyimbo...
            </div>
          </div>
        }
      >
        <HymnalApp />
      </Suspense>
    );
  }

  return (
    <WebsiteLayout currentRoute={route} onNavigate={navigate}>
      {route === '/' && <HomePage onNavigate={navigate} />}
      {route === '/open-app' && <OpenAppPage onNavigate={navigate} />}
      {route === '/about' && <AboutPage onNavigate={navigate} />}
      {route === '/faq' && <FaqPage onNavigate={navigate} />}
      {route === '/feedback' && <FeedbackPage />}
      {route === '/updates' && <UpdatesPage onNavigate={navigate} />}
      {route === '/acknowledgements' && <AcknowledgementsPage onNavigate={navigate} />}
      {route === '/contact' && <ContactPage />}
      {route === '/help' && <HelpSupportPage onNavigate={navigate} />}
      {route === '/privacy' && <PrivacyPolicyPage />}
      {route === '/terms' && <TermsPage />}
      {route === '/support' && <SupportProjectPage onNavigate={navigate} />}
    </WebsiteLayout>
  );
};
