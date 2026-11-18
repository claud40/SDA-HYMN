import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { PROJECT_UPDATES, UPDATE_CATEGORIES, UpdateCategory } from '../data/updates';
import { WebsiteRoute } from '../routes';

interface UpdatesPageProps {
  onNavigate: (route: WebsiteRoute) => void;
}

export const UpdatesPage: React.FC<UpdatesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | UpdateCategory>('all');

  const filteredUpdates =
    selectedCategory === 'all'
      ? PROJECT_UPDATES
      : PROJECT_UPDATES.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-10">
      <header className="space-y-4">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          Updates &amp; Announcements
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Official notes on new features, verified hymn corrections, performance improvements, and project announcements will be shared here.
        </p>
      </header>

      {/* Category Filter Tabs */}
      <div
        role="tablist"
        aria-label="Filter updates by category"
        className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/60 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"
      >
        <button
          type="button"
          role="tab"
          aria-selected={selectedCategory === 'all'}
          onClick={() => setSelectedCategory('all')}
          className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
            selectedCategory === 'all'
              ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          All Updates
        </button>
        {UPDATE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={selectedCategory === cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Updates Feed or Honest Empty State */}
      {filteredUpdates.length > 0 ? (
        <div className="space-y-4">
          {filteredUpdates.map((item) => {
            const cat = UPDATE_CATEGORIES.find((c) => c.id === item.category);
            return (
              <article
                key={item.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-2"
              >
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <time dateTime={item.date} className="font-mono tabular-nums">
                    {item.date}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{cat?.label}</span>
                </div>
                <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.summary}
                </p>
              </article>
            );
          })}
        </div>
      ) : (
        <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 space-y-6">
          <div className="flex items-start gap-4">
            <Bell className="w-6 h-6 text-[#0D47A1] dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
                No announcements published yet
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Official release notes, hymn corrections, and project announcements will appear here as they are published.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
            {UPDATE_CATEGORIES.map((cat) => (
              <div key={cat.id} className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {cat.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="/feedback"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/feedback');
              }}
              className="inline-flex items-center text-sm font-semibold text-[#0B3B8C] dark:text-blue-400 hover:underline"
            >
              Suggest a feature or report a hymn correction →
            </a>
          </div>
        </section>
      )}
    </div>
  );
};
