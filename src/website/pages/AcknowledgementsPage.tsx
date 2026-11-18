import React from 'react';
import { WebsiteRoute } from '../routes';

interface AcknowledgementsPageProps {
  onNavigate: (route: WebsiteRoute) => void;
}

export const AcknowledgementsPage: React.FC<AcknowledgementsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12">
      <header className="space-y-4">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          Acknowledgements
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Kristu mu Nyimbo is made possible through the dedication of translators, proofreaders, contributors, and hymn and Scripture source materials. Verified names and attributions will be published here as permissions are confirmed.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
            01. Translators &amp; Language Reviewers
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Recognizing individuals and teams assisting with Bemba, Tonga, Chewa, and English hymn text accuracy and spelling.
          </p>
          <ul className="pt-2 space-y-1.5 text-sm text-slate-500 dark:text-slate-400 font-mono">
            <li>[Bemba Language Reviewers — Pending confirmation]</li>
            <li>[Tonga Language Reviewers — Pending confirmation]</li>
            <li>[Chewa Language Reviewers — Pending confirmation]</li>
          </ul>
        </section>

        <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
            02. Project Contributors
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Recognizing volunteers helping with proofreading, testing across devices, accessibility feedback, and church projection testing.
          </p>
          <ul className="pt-2 space-y-1.5 text-sm text-slate-500 dark:text-slate-400 font-mono">
            <li>[Contributor Names — To be added with permission]</li>
          </ul>
        </section>

        <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 md:col-span-2">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
            03. Hymn &amp; Scripture Material Sources
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Full bibliographic references and source credits for hymn collections and English Bible translations will be listed here once finalized and verified.
          </p>
          <ul className="pt-2 space-y-1.5 text-sm text-slate-500 dark:text-slate-400 font-mono">
            <li>[Hymn Collection Sources &amp; Edition Credits — To be supplied]</li>
            <li>[Bible Translation Attributions — To be supplied]</li>
            <li>[Supporting Organisations — To be listed only where formally confirmed]</li>
          </ul>
        </section>
      </div>

      <section className="rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Have a credit correction or attribution request? Please reach out to us directly.
        </p>
        <a
          href="/contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/contact');
          }}
          className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#0D47A1] bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors whitespace-nowrap shrink-0"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};
