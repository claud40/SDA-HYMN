import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-10">
      <header className="space-y-3">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          Please read these Terms &amp; Conditions carefully before using the Kristu mu Nyimbo website and Progressive Web App.
        </p>
      </header>

      <div className="space-y-8 border-t border-slate-200 dark:border-slate-800 pt-8 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        <section className="space-y-2.5">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
            1. Acceptable Use
          </h2>
          <p>
            Kristu mu Nyimbo is provided for personal devotion, choir preparation, Bible study, and congregational worship. You agree to use the website and application lawfully and respectfully, and not to attempt to disrupt, reverse-engineer, tamper with, or misuse the service or its underlying files.
          </p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
            2. Intellectual Property
          </h2>
          <p>
            Hymn lyrics, translations, musical references, Bible translations, logos, and trademarks displayed within Kristu mu Nyimbo remain the property of their respective rights holders where applicable. Inclusion of any hymn or Bible text does not grant users ownership or permission for commercial redistribution beyond what is permitted by applicable law or the respective rights holders.
          </p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
            3. Content Accuracy
          </h2>
          <p>
            We strive to keep hymn numbers, lyrics, translations, and Bible passages accurate and faithful to standard editions. However, occasional typographical or formatting errors may occur. The application and its content are provided on an &ldquo;as is&rdquo; basis without warranties of any kind. If you notice an error, we encourage you to report it through our Contact Us page.
          </p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
            4. User Responsibilities
          </h2>
          <p>
            You are responsible for keeping your device and browser updated and for verifying offline availability before relying on the app in locations without internet access. Clearing your browser data may remove locally saved preferences, favorites, or highlights.
          </p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
            5. Changes to These Terms
          </h2>
          <p>
            These Terms &amp; Conditions may be updated from time to time. Continued use of the website or application after changes are posted constitutes acceptance of the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
};
