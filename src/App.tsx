import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen } from 'lucide-react';
import { SAMPLE_HYMNS, Hymn } from './data/hymns';
import { useHymnalDB } from './hooks/useHymnalDB';
import { Header } from './components/Header';
import { HymnCard } from './components/HymnCard';
import { HymnReader } from './components/HymnReader';
import { NumericDialpadModal } from './components/NumericDialpadModal';
import { SabbathServicePlanner } from './components/SabbathServicePlanner';
import { TopicsIndex } from './components/TopicsIndex';
import { MobileBottomNav } from './components/MobileBottomNav';
import { SettingsModal } from './components/SettingsModal';
import { applyThemeToDOM, getStoredThemePreference } from './utils/theme';

export default function App() {
  // Navigation tabs: 'catalog' | 'topics' | 'favorites' | 'service'
  const [activeTab, setActiveTab] = useState<'catalog' | 'topics' | 'favorites' | 'service'>('catalog');

  // Search & Filtering
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'number' | 'title'>('number');

  // Currently opened hymn in reader
  const [activeHymn, setActiveHymn] = useState<Hymn | null>(null);

  // Fast numeric dialpad modal
  const [isDialpadOpen, setIsDialpadOpen] = useState<boolean>(false);

  // Settings modal
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // Initialize theme on app mount
  useEffect(() => {
    applyThemeToDOM(getStoredThemePreference());
  }, []);

  // Native IndexedDB storage for hymns, favorites, and recent history
  const {
    hymns,
    favorites,
    recentHymns,
    toggleFavorite,
    recordRecentHymn,
  } = useHymnalDB();

  const handleOpenHymn = (hymn: Hymn) => {
    setActiveHymn(hymn);
    recordRecentHymn(hymn);
  };

  // Filter and sort hymns
  const filteredHymns = useMemo(() => {
    return hymns.filter((hymn) => {
      // Tab filter for Favorites
      if (activeTab === 'favorites' && !favorites.includes(hymn.id)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && hymn.category !== selectedCategory) {
        return false;
      }

      // Query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.trim().toLowerCase();
        const matchesNumber = hymn.number.toString().includes(query);
        const matchesTitle = hymn.title.toLowerCase().includes(query);
        const matchesWriter = hymn.writer ? hymn.writer.toLowerCase().includes(query) : false;
        const matchesTune = hymn.englishTune.toLowerCase().includes(query);
        const matchesScripture = hymn.scripture.toLowerCase().includes(query);
        const matchesCategory = hymn.categoryBemba.toLowerCase().includes(query);
        const matchesLyrics = hymn.verses.some((verse) =>
          verse.some((line) => line.toLowerCase().includes(query))
        ) || (hymn.chorus ? hymn.chorus.some((line) => line.toLowerCase().includes(query)) : false);

        return matchesNumber || matchesTitle || matchesWriter || matchesTune || matchesScripture || matchesCategory || matchesLyrics;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'number') {
        return a.number - b.number;
      }
      return a.title.localeCompare(b.title);
    });
  }, [searchQuery, selectedCategory, sortBy, activeTab, favorites]);

  // Reader Prev / Next Navigation Handlers
  const currentHymnIndex = activeHymn
    ? hymns.findIndex((h) => h.id === activeHymn.id)
    : -1;
  const hasPrev = currentHymnIndex > 0;
  const hasNext = currentHymnIndex >= 0 && currentHymnIndex < hymns.length - 1;

  const handleNavigatePrev = () => {
    if (hasPrev) {
      handleOpenHymn(hymns[currentHymnIndex - 1]);
    }
  };

  const handleNavigateNext = () => {
    if (hasNext) {
      handleOpenHymn(hymns[currentHymnIndex + 1]);
    }
  };

  const handleSelectTopicFromIndex = (topicId: string) => {
    setSelectedCategory(topicId);
    setActiveTab('catalog');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-hymn-sans pb-20 md:pb-8">
      {/* Top Bar Header strictly following 3-Zone Top Bar Contract */}
      {/* Top Bar Header with Search & 8-dots button on same line as Kristu Mu Nyimbo */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenDialpad={() => setIsDialpadOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        favoritesCount={favorites.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectCategory={(categoryId) => {
          setSelectedCategory(categoryId);
          setActiveTab('catalog');
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* View Switcher: Catalog vs Topics vs Favorites vs Service */}
        {activeTab === 'service' ? (
          <SabbathServicePlanner onSelectHymn={handleOpenHymn} />
        ) : activeTab === 'topics' ? (
          <TopicsIndex
            onSelectTopic={handleSelectTopicFromIndex}
            onSelectHymn={handleOpenHymn}
          />
        ) : (
          <section>

            {/* Hymn Cards Grid */}
            {filteredHymns.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {filteredHymns.map((hymn) => (
                  <HymnCard
                    key={hymn.id}
                    hymn={hymn}
                    isFavorite={favorites.includes(hymn.id)}
                    onToggleFavorite={toggleFavorite}
                    onSelect={handleOpenHymn}
                    searchQuery={searchQuery}
                  />
                ))}
              </div>
            ) : (
              /* Clean Empty State */
              <div className="py-16 text-center bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8">
                <BookOpen className="w-10 h-10 mx-auto text-stone-300 dark:text-stone-600 mb-3" />
                <h3 className="font-serif text-lg font-semibold text-stone-800 dark:text-stone-200">
                  Tapali Inyimbo Yasangwamo
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-1 max-w-md mx-auto">
                  {activeTab === 'favorites'
                    ? 'Tamusangile inyimbo pa malumbo yenu. Tinyeni akacishi ka bookmark pa nyimbo imo ine.'
                    : `Tapali inyimbo ikwete amashiwi aya: "${searchQuery}". Esheni ukulemba nambala iili ngo 1, 7, 18, 33, 72.`}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-xs font-medium text-stone-700 dark:text-stone-300 transition-colors"
                >
                  Bwelelani pa nyimbo shonse (Reset filters)
                </button>
              </div>
            )}
          </section>
        )}
      </main>

      {/* Reader Screen Modal (When hymn is selected) */}
      {activeHymn && (
        <HymnReader
          hymn={activeHymn}
          isFavorite={favorites.includes(activeHymn.id)}
          onToggleFavorite={toggleFavorite}
          onClose={() => setActiveHymn(null)}
          onNavigatePrev={handleNavigatePrev}
          onNavigateNext={handleNavigateNext}
          onOpenDialpad={() => setIsDialpadOpen(true)}
          hasPrev={hasPrev}
          hasNext={hasNext}
          totalHymnsCount={hymns.length}
        />
      )}

      {/* Fast Numeric Keypad Modal */}
      <NumericDialpadModal
        isOpen={isDialpadOpen}
        onClose={() => setIsDialpadOpen(false)}
        onSelectHymn={(hymn) => {
          handleOpenHymn(hymn);
          setIsDialpadOpen(false);
        }}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        favorites={favorites}
        recentHymns={recentHymns}
        allHymns={hymns}
        onSelectHymn={(hymn) => {
          handleOpenHymn(hymn);
          setIsSettingsOpen(false);
        }}
        onViewFavorites={() => {
          setActiveTab('favorites');
          setIsSettingsOpen(false);
        }}
      />

      {/* Mobile-First Bottom Navigation Bar */}
      <MobileBottomNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenDialpad={() => setIsDialpadOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        favoritesCount={favorites.length}
      />
    </div>
  );
}
