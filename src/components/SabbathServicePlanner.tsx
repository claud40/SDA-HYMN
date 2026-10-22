import React from 'react';
import { Calendar, Play, Music, ArrowRight, Sparkles } from 'lucide-react';
import { WorshipProgramItem, DEFAULT_SABBATH_PROGRAM, SAMPLE_HYMNS, Hymn } from '../data/hymns';

interface SabbathServicePlannerProps {
  onSelectHymn: (hymn: Hymn) => void;
  allHymns?: Hymn[];
}

export const SabbathServicePlanner: React.FC<SabbathServicePlannerProps> = ({
  onSelectHymn,
  allHymns = SAMPLE_HYMNS,
}) => {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8">
        <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-amber-800 dark:text-amber-400 font-semibold mb-2">
          <Calendar className="w-4 h-4" />
          <span>Ipepo lye Sabata (Order of Sabbath Worship)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 dark:text-stone-100">
          Inyimbo sha Cipepo (Service Setlist)
        </h2>
        <p className="text-sm text-stone-600 dark:text-stone-400 mt-2 max-w-2xl leading-relaxed">
          Order of hymns selected for divine Sabbath worship. Choir leaders, song conductors, and church members can follow each hymn sequentially through the service.
        </p>
      </div>

      {/* Program Hymn Items */}
      <div className="space-y-3">
        {DEFAULT_SABBATH_PROGRAM.map((item: WorshipProgramItem) => {
          const hymn = allHymns.find((h) => h.number === item.hymnNumber);
          if (!hymn) return null;

          return (
            <div
              key={item.id}
              onClick={() => onSelectHymn(hymn)}
              className="group bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-4 sm:p-5 flex items-center justify-between gap-4 hover:border-amber-700/50 cursor-pointer transition-all shadow-xs hover:shadow-md"
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* Order Index */}
                <div className="shrink-0 w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center font-mono text-xs font-bold text-stone-600 dark:text-stone-300">
                  {item.order}
                </div>

                <div className="min-w-0">
                  {/* Church Program Label */}
                  <div className="text-xs font-medium text-amber-900 dark:text-amber-400">
                    {item.bembaLabel} · <span className="text-stone-500">{item.label}</span>
                  </div>

                  {/* Hymn Title */}
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-stone-900 dark:text-stone-100 group-hover:text-amber-900 dark:group-hover:text-amber-400 transition-colors truncate mt-0.5">
                    Nyimbo {hymn.number}: {hymn.title}
                  </h4>

                  {/* Metadata */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mt-1">
                    <span>{hymn.englishTune}</span>
                    <span aria-hidden="true">·</span>
                    <span>{hymn.key}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0">
                <button
                  type="button"
                  className="px-3.5 py-2 min-h-[44px] rounded-lg bg-stone-100 dark:bg-stone-800 group-hover:bg-amber-900 group-hover:text-white text-stone-700 dark:text-stone-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span className="hidden sm:inline">Isuleni</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
