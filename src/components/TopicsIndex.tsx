import React from 'react';
import { BookOpen, ChevronRight, Music } from 'lucide-react';
import { CATEGORIES_LIST, SAMPLE_HYMNS, Hymn } from '../data/hymns';

interface TopicsIndexProps {
  onSelectTopic: (topicId: string) => void;
  onSelectHymn: (hymn: Hymn) => void;
}

export const TopicsIndex: React.FC<TopicsIndexProps> = ({
  onSelectTopic,
  onSelectHymn,
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-800 dark:text-amber-400 font-semibold mb-2">
          <BookOpen className="w-4 h-4" />
          <span>Amalyashi (15 Categories)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 dark:text-stone-100">
          Search by category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES_LIST.map((topic) => {
          const matchingHymns = SAMPLE_HYMNS.filter((h) => h.category === topic.id);

          return (
            <div
              key={topic.id}
              className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5 hover:border-amber-700/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {topic.number}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                      {topic.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-stone-500 font-medium shrink-0 pt-0.5">
                    {matchingHymns.length} {matchingHymns.length === 1 ? 'nyimbo' : 'nyimbo'}
                  </span>
                </div>

                {/* Sample Hymns in this topic */}
                {matchingHymns.length > 0 ? (
                  <div className="mt-4 space-y-1.5 border-t border-stone-100 dark:border-stone-800/80 pt-3">
                    {matchingHymns.slice(0, 3).map((hymn) => (
                      <button
                        key={hymn.id}
                        onClick={() => onSelectHymn(hymn)}
                        className="w-full text-left py-1.5 px-2 -mx-2 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800/50 flex items-center justify-between text-xs transition-colors group"
                      >
                        <span className="font-medium text-stone-700 dark:text-stone-300 group-hover:text-amber-900 dark:group-hover:text-amber-400 truncate">
                          <span className="font-serif font-bold mr-1.5 text-stone-500">#{hymn.number}</span>
                          {hymn.title}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-800 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-500 italic">
                    <Music className="w-3.5 h-3.5" />
                    <span>Inyimbo shikalundwapo (Sample)</span>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => onSelectTopic(topic.id)}
                  className="text-xs font-semibold text-amber-900 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Moneni Shonse ({matchingHymns.length})</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
