import React from 'react';
import { Bookmark, Music, ChevronRight } from 'lucide-react';
import { Hymn } from '../data/hymns';
import { getSafeHighlightSegments } from '../utils/searchSanitizer';

interface HymnCardProps {
  hymn: Hymn;
  isFavorite: boolean;
  onToggleFavorite: (hymnId: string) => void;
  onSelect: (hymn: Hymn) => void;
  searchQuery?: string;
}

export const HymnCard: React.FC<HymnCardProps> = ({
  hymn,
  isFavorite,
  onToggleFavorite,
  onSelect,
  searchQuery,
}) => {
  // Highlight search text helper using safe, plain-text substring matching (no RegExp)
  const highlightMatch = (text: string, query?: string) => {
    if (!text) return text;
    if (!query || query.trim() === '') return text;
    const segments = getSafeHighlightSegments(text, query);
    return (
      <>
        {segments.map((seg, i) =>
          seg.isMatch ? (
            <mark key={i} className="bg-amber-200 dark:bg-amber-900/60 text-stone-900 dark:text-stone-100 rounded px-0.5">
              {seg.text}
            </mark>
          ) : (
            seg.text
          )
        )}
      </>
    );
  };

  const verseCount = hymn.verses.length;

  return (
    <div
      onClick={() => onSelect(hymn)}
      className="group relative bg-white dark:bg-stone-900/80 rounded-xl border border-stone-200/90 dark:border-stone-800 p-2.5 hover:border-amber-700/40 dark:hover:border-amber-600/40 transition-all cursor-pointer shadow-xs hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-1.5">
        {/* Left: Hymn Number & Content */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="shrink-0 w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center font-serif text-sm font-bold text-amber-950 dark:text-amber-400 group-hover:bg-amber-900 group-hover:text-white transition-colors tabular-nums">
            {hymn.number}
          </div>

          <div className="min-w-0 flex-1">
            {/* Title */}
            <h3
              className="font-semibold text-stone-900 dark:text-stone-100 group-hover:text-amber-900 dark:group-hover:text-amber-400 transition-colors leading-tight truncate"
              style={{
                fontFamily: 'var(--hymn-font-family, inherit)',
                fontSize: 'clamp(0.85rem, calc(var(--card-title-size, 1rem) * 0.86), 1.025rem)',
              }}
            >
              {highlightMatch(hymn.title, searchQuery)}
            </h3>

            {/* English Title & Stanzas */}
            <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 flex items-center gap-1 min-w-0">
              {(hymn.englishTune || hymn.writer) && (
                <span className="truncate italic text-stone-600 dark:text-stone-300 font-medium min-w-0">
                  {highlightMatch(hymn.englishTune || hymn.writer, searchQuery)}
                </span>
              )}
              <span className="text-stone-300 dark:text-stone-700 shrink-0">•</span>
              <span className="text-[11px] text-stone-400 dark:text-stone-500 shrink-0 whitespace-nowrap">
                {verseCount} {verseCount === 1 ? 'cikomo' : 'fikomo'}
              </span>
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center shrink-0" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={() => onToggleFavorite(hymn.id)}
            aria-label={isFavorite ? 'Fumyapo pa malumbo (Remove from favorites)' : 'Bikapo pa malumbo (Add to favorites)'}
            className={`w-7 h-7 min-w-[28px] rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
              isFavorite
                ? 'text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40'
                : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          <div className="hidden sm:flex w-4 h-7 items-center justify-center text-stone-300 dark:text-stone-600 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
