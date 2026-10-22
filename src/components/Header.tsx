import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Music, Hash, BookOpen, Bookmark, Calendar, ChevronRight, Download, Search, Settings } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { CATEGORIES_LIST } from '../data/hymns';
import { AdventistLogo } from './AdventistLogo';
import { MAX_SEARCH_LENGTH } from '../utils/searchSanitizer';

interface HeaderProps {
  activeTab: 'catalog' | 'topics' | 'favorites' | 'service';
  onSelectTab: (tab: 'catalog' | 'topics' | 'favorites' | 'service') => void;
  onOpenDialpad: () => void;
  onOpenSettings?: () => void;
  favoritesCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenDialpad,
  onOpenSettings,
  favoritesCount,
  searchQuery,
  onSearchChange,
  onSelectCategory,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  // Close 3-lines navigation menu on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleNavClick = (tab: 'catalog' | 'topics' | 'favorites' | 'service') => {
    onSelectTab(tab);
    setIsMenuOpen(false);
  };

  const handleDialpadClick = () => {
    onOpenDialpad();
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-[#FAF8F5]/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-1.5 sm:gap-3 md:gap-4">
        {/* On Mobile when search is open: In-Line Search takeover on the exact same top line */}
        {isMobileSearchOpen ? (
          <div className="sm:hidden flex items-center gap-1.5 w-full animate-in fade-in duration-150">
            <button
              type="button"
              onClick={() => setIsMobileSearchOpen(false)}
              className="w-10 h-10 min-w-[40px] rounded-xl flex items-center justify-center text-stone-700 hover:text-amber-900 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors shrink-0"
              aria-label="Cala kufwaya (Close search)"
              title="Close search"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                ref={mobileInputRef}
                type="text"
                value={searchQuery}
                maxLength={MAX_SEARCH_LENGTH}
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                onChange={(e) => onSearchChange(e.target.value.slice(0, MAX_SEARCH_LENGTH))}
                placeholder="Fwayeni inyimbo..."
                className="w-full h-10 pl-9 pr-8 rounded-xl bg-stone-100 dark:bg-stone-800/90 border border-stone-200 dark:border-stone-700 text-xs text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            {/* 6-Dots Dialpad Button preserved on same line */}
            <button
              type="button"
              onClick={onOpenDialpad}
              className="w-10 h-10 min-w-[40px] rounded-xl flex items-center justify-center bg-amber-900 hover:bg-amber-950 dark:bg-amber-800 text-white transition-all shadow-sm active:scale-95 shrink-0"
              aria-label="6 dots"
              title="Nambala (Keypad)"
            >
              <span className="grid grid-cols-3 gap-1 p-1">
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              </span>
            </button>
          </div>
        ) : (
          <>
            {/* Zone 1: Wordmark & 3-Lines Navigation Trigger Button */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0 flex-1 sm:flex-initial">
              {/* 3-Lines (Hamburger) Navigation Toggle */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] rounded-xl flex items-center justify-center text-stone-700 hover:text-amber-900 dark:text-stone-300 dark:hover:text-amber-400 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors shrink-0"
                aria-label="3 lines navigation menu"
                aria-expanded={isMenuOpen}
                title="3 Lines Navigation Menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <div className="flex flex-col justify-center items-center gap-1 w-4.5 h-4.5">
                    <span className="w-4.5 h-0.5 bg-current rounded-full transition-all"></span>
                    <span className="w-4.5 h-0.5 bg-current rounded-full transition-all"></span>
                    <span className="w-4.5 h-0.5 bg-current rounded-full transition-all"></span>
                  </div>
                )}
              </button>

              {/* Wordmark with Adventist Emblem */}
              <button
                onClick={() => handleNavClick('catalog')}
                className="flex items-center gap-1.5 sm:gap-2 text-left font-display font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-stone-900 dark:text-stone-100 tracking-tight whitespace-nowrap truncate hover:text-amber-900 dark:hover:text-amber-400 transition-colors min-w-0"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 p-0.5 rounded-lg bg-white shadow-xs border border-amber-500/25 shrink-0 flex items-center justify-center">
                  <AdventistLogo className="w-full h-full" />
                </div>
                <span className="truncate">Kristu Mu Nyimbo</span>
              </button>
            </div>

            {/* Search on top in the same line with Kristu Mu Nyimbo (Tablet & Desktop) */}
            <div className="flex-1 max-w-xs md:max-w-sm lg:max-w-md mx-2 hidden sm:block">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  maxLength={MAX_SEARCH_LENGTH}
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  onChange={(e) => onSearchChange(e.target.value.slice(0, MAX_SEARCH_LENGTH))}
                  placeholder="Fwayeni inyimbo (Search hymns)..."
                  className="w-full h-10 pl-9 pr-8 rounded-xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30 transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Zone 2: Navigation Links for Tablet/Desktop (Also mirrored in 3-lines menu) */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-xs lg:text-sm font-medium text-stone-600 dark:text-stone-400">
              <button
                onClick={() => handleNavClick('catalog')}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  activeTab === 'catalog'
                    ? 'text-amber-900 dark:text-amber-400 border-b-2 border-amber-800 dark:border-amber-500 font-semibold'
                    : 'hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                Inyimbo
              </button>
              <button
                onClick={handleDialpadClick}
                className="whitespace-nowrap shrink-0 transition-colors py-1 hover:text-stone-900 dark:hover:text-stone-200"
              >
                Nambala
              </button>
              <button
                onClick={() => handleNavClick('topics')}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  activeTab === 'topics'
                    ? 'text-amber-900 dark:text-amber-400 border-b-2 border-amber-800 dark:border-amber-500 font-semibold'
                    : 'hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                Search by category
              </button>
              <button
                onClick={() => handleNavClick('favorites')}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 flex items-center gap-1.5 ${
                  activeTab === 'favorites'
                    ? 'text-amber-900 dark:text-amber-400 border-b-2 border-amber-800 dark:border-amber-500 font-semibold'
                    : 'hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                <span>Amalumbo</span>
                {favoritesCount > 0 && (
                  <span className="text-xs font-mono text-amber-800 dark:text-amber-400 font-bold">
                    ({favoritesCount})
                  </span>
                )}
              </button>
              <button
                onClick={() => handleNavClick('service')}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  activeTab === 'service'
                    ? 'text-amber-900 dark:text-amber-400 border-b-2 border-amber-800 dark:border-amber-500 font-semibold'
                    : 'hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                Ipepo
              </button>
              <button
                type="button"
                onClick={onOpenSettings}
                className="whitespace-nowrap shrink-0 transition-colors py-1 flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-stone-200"
                title="Settings"
                aria-label="Settings"
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>
            </nav>

            {/* Zone 3: Search Button, Settings & 6-Dots Quick Jump Action (on same line) */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Settings Button */}
              <button
                type="button"
                onClick={onOpenSettings}
                className="w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] rounded-xl flex items-center justify-center text-stone-700 hover:text-amber-900 dark:text-stone-300 dark:hover:text-amber-400 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors shrink-0"
                aria-label="Settings"
                title="Settings"
              >
                <Settings className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </button>

              {/* Search Button on top in the same line on mobile */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileSearchOpen(true);
                  setTimeout(() => mobileInputRef.current?.focus(), 50);
                }}
                className="sm:hidden w-9 h-9 min-w-[36px] rounded-xl flex items-center justify-center text-stone-700 hover:text-amber-900 dark:text-stone-300 dark:hover:text-amber-400 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors shrink-0"
                aria-label="Fwayeni inyimbo (Search)"
                title="Search hymns"
              >
                <Search className="w-4.5 h-4.5" />
              </button>

              {/* 6-Dots Dialpad Button (6 dots, no words or letters) */}
              <button
                type="button"
                onClick={onOpenDialpad}
                className="w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] rounded-xl flex items-center justify-center bg-amber-900 hover:bg-amber-950 dark:bg-amber-800 dark:hover:bg-amber-700 text-white transition-all shadow-xs active:scale-95 shrink-0"
                aria-label="6 dots"
                title="Nambala (Keypad)"
              >
                <span className="grid grid-cols-3 gap-0.5 sm:gap-1 p-0.5 sm:p-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                </span>
              </button>
            </div>
          </>
        )}
      </div>

      {/* 3-Lines Navigation Dropdown Drawer Panel */}
      {isMenuOpen && (
        <div className="border-t border-stone-200 dark:border-stone-800 bg-[#FAF8F5] dark:bg-stone-950 shadow-xl transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="text-xs uppercase tracking-wider text-amber-900 dark:text-amber-400 font-semibold mb-3 px-2 flex items-center justify-between">
              <span>3-Lines Navigation (Umutande wa Nyimbo)</span>
              <span className="text-[11px] text-stone-400 font-normal">SDA Bemba Hymnal</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {/* Line 1: Inyimbo (All Hymns) */}
              <button
                type="button"
                onClick={() => handleNavClick('catalog')}
                className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all ${
                  activeTab === 'catalog'
                    ? 'bg-amber-900 text-white border-amber-900 shadow-sm'
                    : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 hover:border-amber-700/50'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    activeTab === 'catalog' ? 'bg-amber-800 text-white' : 'bg-stone-100 dark:bg-stone-800 text-amber-900 dark:text-amber-400'
                  }`}>
                    <Music className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">Inyimbo (All Hymns)</div>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 ${activeTab === 'catalog' ? 'text-amber-200' : 'text-stone-400'}`} />
              </button>

              {/* Line 2: Search by category */}
              <button
                type="button"
                onClick={() => handleNavClick('topics')}
                className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all ${
                  activeTab === 'topics'
                    ? 'bg-amber-900 text-white border-amber-900 shadow-sm'
                    : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 hover:border-amber-700/50'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    activeTab === 'topics' ? 'bg-amber-800 text-white' : 'bg-stone-100 dark:bg-stone-800 text-amber-900 dark:text-amber-400'
                  }`}>
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">Search by category</div>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 ${activeTab === 'topics' ? 'text-amber-200' : 'text-stone-400'}`} />
              </button>

              {/* Line 3: Amalumbo (Favorites) */}
              <button
                type="button"
                onClick={() => handleNavClick('favorites')}
                className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all ${
                  activeTab === 'favorites'
                    ? 'bg-amber-900 text-white border-amber-900 shadow-sm'
                    : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 hover:border-amber-700/50'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    activeTab === 'favorites' ? 'bg-amber-800 text-white' : 'bg-stone-100 dark:bg-stone-800 text-amber-900 dark:text-amber-400'
                  }`}>
                    <Bookmark className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate flex items-center gap-1.5">
                      <span>Amalumbo (Favorites)</span>
                      {favoritesCount > 0 && (
                        <span className={`text-xs font-mono font-bold ${activeTab === 'favorites' ? 'text-amber-200' : 'text-amber-900 dark:text-amber-400'}`}>
                          ({favoritesCount})
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 ${activeTab === 'favorites' ? 'text-amber-200' : 'text-stone-400'}`} />
              </button>

              {/* Line 4: Settings */}
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenSettings?.();
                }}
                className="w-full text-left p-3 rounded-xl border bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 hover:border-amber-700/50 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-800 text-amber-900 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">Settings</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400 shrink-0" />
              </button>
            </div>

            {/* Search by category: 15 categories inside without descriptions */}
            <div className="mt-4 pt-4 border-t border-stone-200/80 dark:border-stone-800">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="text-xs uppercase tracking-wider text-amber-900 dark:text-amber-400 font-semibold flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Search by category</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleNavClick('topics')}
                  className="text-xs text-amber-800 dark:text-amber-400 hover:underline font-medium"
                >
                  Moneni shonse (View full index) →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 max-h-[320px] overflow-y-auto no-scrollbar pr-1">
                {CATEGORIES_LIST.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      if (onSelectCategory) {
                        onSelectCategory(cat.id);
                      } else {
                        handleNavClick('topics');
                      }
                      setIsMenuOpen(false);
                    }}
                    className="text-left p-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:border-amber-600/50 transition-all flex items-center gap-2.5 group"
                  >
                    <span className="w-6 h-6 rounded-md bg-stone-100 dark:bg-stone-800 group-hover:bg-amber-800 group-hover:text-white text-stone-600 dark:text-stone-300 text-xs font-mono font-bold flex items-center justify-center shrink-0 transition-colors">
                      {cat.number}
                    </span>
                    <span className="text-xs font-medium text-stone-800 dark:text-stone-200 group-hover:text-amber-950 dark:group-hover:text-amber-300 truncate">
                      {cat.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* PWA App Install Action if installable */}
            {(isInstallable || isIOS) && (
              <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-end gap-3 text-xs">
                {isInstallable && (
                  <button
                    type="button"
                    onClick={() => {
                      install();
                      setIsMenuOpen(false);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-amber-900 hover:bg-amber-950 text-white font-medium text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Install App (Windows / Android)</span>
                  </button>
                )}

                {isIOS && (
                  <button
                    type="button"
                    onClick={() => setShowIOSModal(true)}
                    className="px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 font-medium text-xs text-stone-700 dark:text-stone-300 transition-colors"
                  >
                    Install on iPhone / iPad
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* iOS Installation Instructions Guide Modal */}
      {showIOSModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm"
          onClick={() => setShowIOSModal(false)}
        >
          <div
            className="w-full max-w-sm bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-2xl border border-stone-200 dark:border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100 font-serif">
              Install Kristu Mu Nyimbo on iOS
            </h3>
            <p className="mt-2.5 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              1. Tap the <strong>Share</strong> button (box with upward arrow) in the Safari toolbar.<br />
              2. Scroll down and select <strong>Add to Home Screen</strong>.<br />
              3. The hymnal will install and work completely offline without internet!
            </p>
            <button
              type="button"
              onClick={() => setShowIOSModal(false)}
              className="mt-5 w-full h-10 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold transition-colors"
            >
              Cala (Close)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
