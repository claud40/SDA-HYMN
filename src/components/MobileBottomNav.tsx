import React from 'react';
import { BookOpen, Hash, Bookmark, Calendar, Music, Settings } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: 'catalog' | 'topics' | 'favorites' | 'service';
  onSelectTab: (tab: 'catalog' | 'topics' | 'favorites' | 'service') => void;
  onOpenDialpad: () => void;
  onOpenSettings?: () => void;
  favoritesCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onSelectTab,
  onOpenDialpad,
  onOpenSettings,
  favoritesCount,
}) => {
  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-stone-950/95 backdrop-blur-md border-t border-stone-200 dark:border-stone-800 pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-6 h-15 items-center">
        {/* Hymns Tab */}
        <button
          onClick={() => onSelectTab('catalog')}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] transition-colors ${
            activeTab === 'catalog'
              ? 'text-amber-900 dark:text-amber-400 font-semibold'
              : 'text-stone-500 dark:text-stone-400 hover:text-stone-900'
          }`}
        >
          <Music className="w-5 h-5" />
          <span className="text-[10px] mt-1 tracking-tight truncate">Inyimbo</span>
        </button>

        {/* Dialpad Jump */}
        <button
          onClick={onOpenDialpad}
          className="flex flex-col items-center justify-center h-full min-h-[44px] text-stone-500 dark:text-stone-400 hover:text-stone-900 transition-colors"
        >
          <Hash className="w-5 h-5 text-amber-800 dark:text-amber-500" />
          <span className="text-[10px] mt-1 tracking-tight truncate">Nambala</span>
        </button>

        {/* Topics Tab */}
        <button
          onClick={() => onSelectTab('topics')}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] transition-colors ${
            activeTab === 'topics'
              ? 'text-amber-900 dark:text-amber-400 font-semibold'
              : 'text-stone-500 dark:text-stone-400 hover:text-stone-900'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] mt-1 tracking-tight truncate">Category</span>
        </button>

        {/* Favorites Tab */}
        <button
          onClick={() => onSelectTab('favorites')}
          className={`relative flex flex-col items-center justify-center h-full min-h-[44px] transition-colors ${
            activeTab === 'favorites'
              ? 'text-amber-900 dark:text-amber-400 font-semibold'
              : 'text-stone-500 dark:text-stone-400 hover:text-stone-900'
          }`}
        >
          <Bookmark className="w-5 h-5" />
          <span className="text-[10px] mt-1 tracking-tight truncate">Amalumbo</span>
          {favoritesCount > 0 && (
            <span className="absolute top-2 right-4 w-4 h-4 rounded-full bg-amber-800 text-white text-[9px] font-bold flex items-center justify-center">
              {favoritesCount}
            </span>
          )}
        </button>

        {/* Service Program Tab */}
        <button
          onClick={() => onSelectTab('service')}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] transition-colors ${
            activeTab === 'service'
              ? 'text-amber-900 dark:text-amber-400 font-semibold'
              : 'text-stone-500 dark:text-stone-400 hover:text-stone-900'
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] mt-1 tracking-tight truncate">Ipepo</span>
        </button>

        {/* Settings Tab */}
        <button
          type="button"
          onClick={onOpenSettings}
          className="flex flex-col items-center justify-center h-full min-h-[44px] text-stone-500 dark:text-stone-400 hover:text-amber-900 dark:hover:text-amber-400 transition-colors"
          title="Settings"
          aria-label="Settings"
        >
          <Settings className="w-5 h-5" />
          <span className="text-[10px] mt-1 tracking-tight truncate">Settings</span>
        </button>
      </div>
    </nav>
  );
};
