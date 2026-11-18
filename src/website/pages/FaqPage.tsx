import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { WebsiteRoute } from '../routes';

interface FaqPageProps {
  onNavigate: (route: WebsiteRoute) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-is-kmn',
    question: 'What is Kristu mu Nyimbo?',
    answer:
      'Kristu mu Nyimbo is a multilingual Seventh-day Adventist digital hymnal and English Bible Progressive Web App (PWA). It is designed for congregational worship, choir rehearsal, and personal devotion, and works both online and offline.',
  },
  {
    id: 'hymn-languages',
    question: 'Which hymn languages are available?',
    answer:
      'Kristu mu Nyimbo includes hymns in four languages: Bemba (Icibemba), Tonga (Chitonga), Chewa (Chichewa), and English. You can switch between editions at any time from the app menu or Settings.',
  },
  {
    id: 'english-bible',
    question: 'Is the English Bible included?',
    answer:
      'Yes. The application includes a built-in English Bible with King James Version (KJV), English Standard Version (ESV), and Good News Translation (GNT), covering all 66 books of the Old and New Testaments with chapter navigation, search, and verse highlighting.',
  },
  {
    id: 'install-app',
    question: 'How do I install the application?',
    answer:
      'Open Kristu mu Nyimbo in your browser (Chrome on Android/desktop, Safari on iPhone/iPad, or Edge on Windows). On Android or desktop, tap the browser menu or install icon and choose "Install app". On iPhone or iPad, tap the Share button in Safari and select "Add to Home Screen".',
  },
  {
    id: 'offline-use',
    question: 'Can I use it without internet?',
    answer:
      'Yes. After opening the app once while connected to the internet, the Service Worker and browser storage cache the application and hymnals on your device. To ensure a specific hymnal language or Bible translation is ready offline, open that language or Bible version once while online.',
  },
  {
    id: 'search-hymns',
    question: 'How do I search for hymns?',
    answer:
      'You can search by typing a hymn number, title, or line from a verse into the search bar at the top of the app. You can also tap the six-dot keypad button to jump directly to a hymn number, or browse hymns by worship category.',
  },
  {
    id: 'two-languages',
    question: 'Can I read hymns in two languages?',
    answer:
      'Yes. Inside the hymn reader, switch to Dual mode to read the selected local language (Bemba, Tonga, or Chewa) side by side with English. You can also adjust the horizontal Column Spacing in Settings for comfortable reading on laptops and church projectors.',
  },
  {
    id: 'operating-systems',
    question: 'Does the application work on different operating systems?',
    answer:
      'Yes. Because Kristu mu Nyimbo is a Progressive Web App, it works in modern browsers across Android phones and tablets, iPhones and iPads (iOS/iPadOS), Windows computers, macOS, and Linux devices without requiring separate app store downloads.',
  },
  {
    id: 'incorrect-hymn',
    question: 'What should I do if I find an incorrect hymn?',
    answer:
      'Please report any spelling mistake, numbering issue, or missing verse using the Feedback & Suggestions page on this website. Include the hymnal language, hymn number, and stanza details. Submissions are reviewed carefully before any official correction is published.',
  },
];

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12">
      <header className="space-y-4">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Clear answers to common questions about installing, using, and reading with Kristu mu Nyimbo.
        </p>
      </header>

      <section aria-label="FAQ list" className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openId === item.id;
          const panelId = `faq-panel-${item.id}`;
          const buttonId = `faq-button-${item.id}`;
          return (
            <div key={item.id} className="py-1">
              <h2 className="m-0">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-5 text-left flex items-center justify-between gap-4 cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D47A1] rounded-lg"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs tabular-nums text-[#0D47A1] dark:text-blue-400 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-[#0B3B8C] dark:group-hover:text-blue-400 transition-colors">
                      {item.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 dark:text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0D47A1] dark:text-blue-400' : ''
                    }`}
                  />
                </button>
              </h2>

              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="pb-5 pl-7 sm:pl-8 pr-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </section>

      <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="font-serif text-lg font-semibold text-slate-900 dark:text-slate-100">
            Have another question or found a lyric typo?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Visit Help &amp; Support or submit a note through Feedback &amp; Suggestions.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="/feedback"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/feedback');
            }}
            className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#0D47A1] text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors whitespace-nowrap"
          >
            Send Feedback
          </a>
          <a
            href="/app"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/app');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0B3B8C] hover:bg-blue-950 text-white text-sm font-semibold transition-colors whitespace-nowrap"
          >
            <span>Open App</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
