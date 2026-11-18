import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WebsiteRoute } from '../routes';
import { WebsiteImage } from '../components/WebsiteImage';
import helpVisualImg from '../../assets/images/help_digital_worship_clean_1795018337461.jpg';

interface HelpSupportPageProps {
  onNavigate: (route: WebsiteRoute) => void;
}

export const HelpSupportPage: React.FC<HelpSupportPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12">
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-6 space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Help &amp; Support
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Learn how to install Kristu mu Nyimbo, use it offline, search hymns quickly, switch languages, and customize your reading experience.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="/faq"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/faq');
              }}
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#0D47A1] bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors"
            >
              Read FAQ
            </a>
            <a
              href="/feedback"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/feedback');
              }}
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#0D47A1] bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors"
            >
              Report a Hymn Issue
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <WebsiteImage
            src={helpVisualImg}
            alt="Open Bible next to a tablet on a wooden stand and a smartphone on a sunlit wooden desk"
            aspectClassName="aspect-4/3"
            caption="Consistent reading across phones, tablets, laptops, and church projectors."
          />
        </div>
      </header>

      <div className="space-y-10 border-t border-slate-200 dark:border-slate-800 pt-10">
        {/* 1. Installation */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            01. Installing the App (PWA)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Kristu mu Nyimbo installs directly from your web browser without needing an app store:
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside">
            <li>
              <strong>Android (Chrome):</strong> Open the app, tap the three-dot browser menu, and select <strong>Install app</strong> or <strong>Add to Home screen</strong>.
            </li>
            <li>
              <strong>iPhone &amp; iPad (Safari):</strong> Open the app in Safari, tap the <strong>Share</strong> icon, and choose <strong>Add to Home Screen</strong>.
            </li>
            <li>
              <strong>Windows &amp; Mac (Chrome / Edge):</strong> Click the install icon in the browser address bar and confirm <strong>Install</strong>.
            </li>
          </ul>
        </section>

        {/* 2. Offline Access */}
        <section className="space-y-3 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            02. Offline Access
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            After opening Kristu mu Nyimbo while connected to the internet, the app caches its interface and hymnal data locally on your device using a Service Worker and browser storage. To make sure a specific hymnal edition or Bible translation is ready offline, open that language or Bible version once while online.
          </p>
        </section>

        {/* 3. Hymn Searching */}
        <section className="space-y-3 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            03. Searching for Hymns
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside">
            <li>
              <strong>Search bar:</strong> Type a hymn number, title, or line from a verse to filter matching hymns instantly.
            </li>
            <li>
              <strong>Quick Number Keypad:</strong> Tap the six-dot keypad button in the top bar to jump directly to any hymn number.
            </li>
            <li>
              <strong>Search by Category:</strong> Browse hymns grouped by worship themes and occasions.
            </li>
            <li>
              <strong>Favorites (Amalumbo):</strong> Bookmark frequently sung hymns for quick access during services.
            </li>
          </ul>
        </section>

        {/* 4. Language Selection */}
        <section className="space-y-3 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            04. Language Selection &amp; Dual Reading
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Open the top-left menu and choose <strong>Choose Language</strong> (or visit Settings) to switch between Bemba, Tonga, and Chewa hymnals. When reading a hymn, use the reader mode toggle to view the local language only, English only, or <strong>Dual</strong> side-by-side mode.
          </p>
        </section>

        {/* 5. Reading Preferences */}
        <section className="space-y-3 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            05. Reading Preferences
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Open <strong>Settings</strong> inside the app to adjust your reading comfort. Preferences are saved automatically on your device:
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside">
            <li><strong>Appearance Theme:</strong> Light (Warm Parchment), Dark (Night Sanctuary), or System default.</li>
            <li><strong>Text Size &amp; Font:</strong> Choose from Standard to Senior text sizes, Serif or Sans fonts, and optional Bold mode for projection.</li>
            <li><strong>Line Spacing &amp; Column Spacing:</strong> Control vertical line height and the horizontal space between columns in Dual side-by-side mode.</li>
            <li><strong>Worship Tools:</strong> Enable auto-scroll, keep the screen awake while reading, choose your preferred English Bible translation, and highlight Bible verses.</li>
          </ul>
        </section>

        {/* Bottom Action */}
        <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Still need help or found an issue? Reach out via our Contact page.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact');
              }}
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#0D47A1] text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors whitespace-nowrap"
            >
              Contact Us
            </a>
            <a
              href="/app"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/app');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0B3B8C] hover:bg-blue-950 text-white text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <span>Open App</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
