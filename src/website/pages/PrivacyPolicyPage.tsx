import React from 'react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-10">
      <header className="space-y-3">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          This Privacy Policy explains how Kristu mu Nyimbo handles information when you use the website and hymnal Progressive Web App.
        </p>
      </header>

      <div className="space-y-8 border-t border-slate-200 dark:border-slate-800 pt-8 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        <section className="space-y-2.5">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
            1. Local Device Storage
          </h2>
          <p>
            Kristu mu Nyimbo is designed to function without requiring user accounts or sign-in. Your personal preferences — such as theme selection, text size, line spacing, column spacing, active hymnal language, favorite hymns, recently viewed hymns, and Bible verse highlights — are stored locally in your browser using standard browser storage (IndexedDB and localStorage) so they remain available when you reopen the app or use it offline.
          </p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
            2. Offline Caching
          </h2>
          <p>
            To support offline worship, the Progressive Web App uses a browser Service Worker to cache application files, hymnal editions, and Bible texts on your device. You can clear this cached data at any time through your browser settings.
          </p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
            3. Information You Choose to Share
          </h2>
          <p>
            If you choose to contact us by email, messaging, or a contact form, any information you voluntarily include (such as your name, email address, or feedback message) is used only to respond to your inquiry or review hymn corrections and suggestions.
          </p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
            4. Hosting &amp; Standard Web Requests
          </h2>
          <p>
            When your browser loads the website or app over the internet, standard technical request data (such as IP address, browser type, and requested URLs) may be processed by the hosting provider or font/content delivery services necessary to deliver the page. We do not sell user information.
          </p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
            5. Updates to This Policy
          </h2>
          <p>
            This Privacy Policy may be updated as the project evolves. Any changes will be posted on this page. For privacy questions, please reach out via the Contact Us page.
          </p>
        </section>
      </div>
    </div>
  );
};
