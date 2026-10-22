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
      className="group relative bg-white dark:bg-stone-900/80 rounded-xl border border-stone-200/90 dark:border-stone-800 p-4 sm:p-5 hover:border-amber-700/40 dark:hover:border-amber-600/40 transition-all cursor-pointer shadow-xs hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left: Hymn Number & Content */}
        <div className="flex items-start gap-3.5 sm:gap-4 min-w-0">
          <div className="shrink-0 w-12 h-12 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center font-serif text-lg font-bold text-amber-950 dark:text-amber-400 group-hover:bg-amber-900 group-hover:text-white transition-colors tabular-nums">
            {hymn.number}
          </div>

          <div className="min-w-0">
            {/* Title */}
            <h3
              className="font-semibold text-stone-900 dark:text-stone-100 group-hover:text-amber-900 dark:group-hover:text-amber-400 transition-colors leading-snug"
              style={{
                fontFamily: 'var(--hymn-font-family, inherit)',
                fontSize: 'var(--card-title-size, 1.125rem)',
                lineHeight: '1.3',
              }}
            >
              {highlightMatch(hymn.title, searchQuery)}
            </h3>

            {/* Hymn Writer & Stanzas */}
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 flex items-center flex-wrap gap-x-2 gap-y-0.5">
              <span className="truncate max-w-[200px]">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-800 dark:text-amber-400 mr-1.5">
                  Writer:
                </span>
                <span className="font-medium text-stone-700 dark:text-stone-300">
                  {highlightMatch(hymn.writer, searchQuery)}
                </span>
              </span>
              <span className="text-stone-300 dark:text-stone-700">•</span>
              <span className="text-xs text-stone-400 dark:text-stone-500">
                {verseCount} {verseCount === 1 ? 'cikomo' : 'fikomo'}
              </span>
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={() => onToggleFavorite(hymn.id)}
            aria-label={isFavorite ? 'Fumyapo pa malumbo (Remove from favorites)' : 'Bikapo pa malumbo (Add to favorites)'}
            className={`w-10 h-10 min-w-[40px] rounded-lg flex items-center justify-center transition-colors ${
              isFavorite
                ? 'text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40'
                : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          <div className="hidden sm:flex w-9 h-9 items-center justify-center text-stone-300 dark:text-stone-600 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
