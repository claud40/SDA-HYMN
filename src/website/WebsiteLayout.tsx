import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { AdventistLogo } from '../components/AdventistLogo';
import { WebsiteRoute } from './routes';
import { isSafeInternalRoute } from './security';
import { InstallPWAButton } from './components/InstallPWAButton';

interface WebsiteLayoutProps {
  currentRoute: WebsiteRoute;
  onNavigate: (route: WebsiteRoute) => void;
  children: React.ReactNode;
}

type DropdownKey = 'open-app' | 'help' | 'more' | null;

const FOOTER_BAR_LINKS: Array<{ label: string; path: WebsiteRoute }> = [
  { label: 'Home', path: '/' },
  { label: 'Open App', path: '/open-app' },
  { label: 'About Us', path: '/about' },
  { label: 'Help & Support', path: '/help' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Feedback', path: '/feedback' },
  { label: 'Updates', path: '/updates' },
  { label: 'Acknowledgements', path: '/acknowledgements' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Support the Project', path: '/support' },
  { label: 'Contact Us', path: '/contact' },
];

export const WebsiteLayout: React.FC<WebsiteLayoutProps> = ({
  currentRoute,
  onNavigate,
  children,
}) => {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpenDropdown(null);
  }, [currentRoute]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: WebsiteRoute) => {
    e.preventDefault();
    if (isSafeInternalRoute(path)) {
      setOpenDropdown(null);
      onNavigate(path);
    }
  };

  const toggleDropdown = (key: DropdownKey) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const isHelpGroupActive = ['/help', '/faq', '/feedback'].includes(currentRoute);
  const isMoreGroupActive = ['/updates', '/support', '/acknowledgements', '/contact', '/privacy', '/terms'].includes(currentRoute);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-hymn-sans">
      {/* Top Navigation Bar */}
      <header
        ref={headerRef}
        className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4 lg:gap-6">
          {/* Brand Lockup */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B3B8C] rounded-lg"
          >
            <span className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
              <AdventistLogo className="w-full h-full" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif font-bold text-lg sm:text-xl text-[#0B2E6B] dark:text-white tracking-tight whitespace-nowrap">
                Kristu mu Nyimbo
              </span>
              <span className="font-serif italic text-[11px] sm:text-xs text-[#1565C0] dark:text-blue-300 whitespace-nowrap">
                Hymns • Bible • Worship
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-2 xl:gap-4 text-sm font-medium text-slate-800 dark:text-slate-200"
          >
            {/* Home */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              aria-current={currentRoute === '/' ? 'page' : undefined}
              className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap shrink-0 ${
                currentRoute === '/'
                  ? 'bg-gradient-to-b from-[#1565C0] to-[#0B3B8C] text-white font-semibold shadow-xs'
                  : 'hover:text-[#0B3B8C] dark:hover:text-blue-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-900'
              }`}
            >
              Home
            </a>

            {/* Open App Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('open-app')}
                aria-expanded={openDropdown === 'open-app'}
                className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  currentRoute === '/open-app'
                    ? 'bg-gradient-to-b from-[#1565C0] to-[#0B3B8C] text-white font-semibold shadow-xs'
                    : 'hover:text-[#0B3B8C] dark:hover:text-blue-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-900'
                }`}
              >
                <span>Open App</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'open-app' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'open-app' && (
                <div className="absolute left-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50">
                  <a
                    href="/app"
                    onClick={(e) => handleLinkClick(e, '/app')}
                    className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-[#0B2E6B] dark:text-blue-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-800"
                  >
                    <span>Launch Hymnal App</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/open-app"
                    onClick={(e) => handleLinkClick(e, '/open-app')}
                    className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-800"
                  >
                    Install &amp; App Info
                  </a>
                </div>
              )}
            </div>

            {/* About Us */}
            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              aria-current={currentRoute === '/about' ? 'page' : undefined}
              className={`px-3.5 py-2 rounded-full transition-colors whitespace-nowrap shrink-0 ${
                currentRoute === '/about'
                  ? 'bg-gradient-to-b from-[#1565C0] to-[#0B3B8C] text-white font-semibold shadow-xs'
                  : 'hover:text-[#0B3B8C] dark:hover:text-blue-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-900'
              }`}
            >
              About Us
            </a>

            {/* Help & Support Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('help')}
                aria-expanded={openDropdown === 'help'}
                className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isHelpGroupActive
                    ? 'bg-gradient-to-b from-[#1565C0] to-[#0B3B8C] text-white font-semibold shadow-xs'
                    : 'hover:text-[#0B3B8C] dark:hover:text-blue-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-900'
                }`}
              >
                <span>Help &amp; Support</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'help' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'help' && (
                <div className="absolute left-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50">
                  <a
                    href="/help"
                    onClick={(e) => handleLinkClick(e, '/help')}
                    className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-800"
                  >
                    Help &amp; User Guide
                  </a>
                  <a
                    href="/faq"
                    onClick={(e) => handleLinkClick(e, '/faq')}
                    className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-800"
                  >
                    Frequently Asked Questions
                  </a>
                  <a
                    href="/feedback"
                    onClick={(e) => handleLinkClick(e, '/feedback')}
                    className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-800"
                  >
                    Feedback &amp; Suggestions
                  </a>
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('more')}
                aria-expanded={openDropdown === 'more'}
                className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isMoreGroupActive
                    ? 'bg-gradient-to-b from-[#1565C0] to-[#0B3B8C] text-white font-semibold shadow-xs'
                    : 'hover:text-[#0B3B8C] dark:hover:text-blue-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-900'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'more' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'more' && (
                <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50">
                  <a
                    href="/updates"
                    onClick={(e) => handleLinkClick(e, '/updates')}
                    className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-800"
                  >
                    Updates &amp; Announcements
                  </a>
                  <a
                    href="/support"
                    onClick={(e) => handleLinkClick(e, '/support')}
                    className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-800"
                  >
                    Support the Project
                  </a>
                  <a
                    href="/acknowledgements"
                    onClick={(e) => handleLinkClick(e, '/acknowledgements')}
                    className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-800"
                  >
                    Acknowledgements
                  </a>
                  <a
                    href="/contact"
                    onClick={(e) => handleLinkClick(e, '/contact')}
                    className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-[#F2F6FC] dark:hover:bg-slate-800"
                  >
                    Contact Us
                  </a>
                  <div className="my-1 border-t border-slate-200 dark:border-slate-800" />
                  <a
                    href="/privacy"
                    onClick={(e) => handleLinkClick(e, '/privacy')}
                    className="block px-4 py-2 text-xs text-slate-600 dark:text-slate-400 hover:bg-[#F2F6FC] dark:hover:bg-slate-800"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms"
                    onClick={(e) => handleLinkClick(e, '/terms')}
                    className="block px-4 py-2 text-xs text-slate-600 dark:text-slate-400 hover:bg-[#F2F6FC] dark:hover:bg-slate-800"
                  >
                    Terms &amp; Conditions
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action: Install Application Button */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden sm:block">
              <InstallPWAButton
                onNavigate={onNavigate}
                label="Install Application"
                installedLabel="Open Application"
                variant="header"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">{children}</main>

      {/* Deep Navy Footer Bar */}
      <footer className="bg-[#0B2E6B] dark:bg-slate-950 border-t border-[#092455] dark:border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col xl:flex-row items-center justify-between gap-3">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center xl:justify-start gap-y-1.5 text-xs text-blue-100"
          >
            {FOOTER_BAR_LINKS.map((item, idx) => (
              <React.Fragment key={item.path}>
                {idx > 0 && (
                  <span aria-hidden="true" className="mx-2 text-blue-300/60 select-none">
                    |
                  </span>
                )}
                <a
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className="hover:text-white hover:underline transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              </React.Fragment>
            ))}
          </nav>

          <p className="font-serif italic text-xs sm:text-sm text-blue-100 whitespace-nowrap shrink-0">
            Kristu mu Nyimbo – Together in Worship
          </p>
        </div>
      </footer>
    </div>
  );
};
