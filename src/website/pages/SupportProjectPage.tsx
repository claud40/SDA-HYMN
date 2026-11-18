import React from 'react';
import { Share2, FileCheck2, MessageSquare, HeartHandshake, ArrowUpRight } from 'lucide-react';
import { WebsiteRoute } from '../routes';
import { WebsiteImage } from '../components/WebsiteImage';
import choirSupportImg from '../../assets/images/support_community_choir_1794941034335.jpg';

interface SupportProjectPageProps {
  onNavigate: (route: WebsiteRoute) => void;
}

export const SupportProjectPage: React.FC<SupportProjectPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12">
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-6 space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Support the Project
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Kristu mu Nyimbo grows stronger through the care and participation of worshipers, choirs, and churches. Here are meaningful ways you can help today.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="/feedback"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/feedback');
              }}
              className="px-4 py-2 rounded-xl bg-[#0B3B8C] hover:bg-blue-950 text-white text-sm font-semibold transition-colors"
            >
              Submit Feedback
            </a>
            <a
              href="/acknowledgements"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/acknowledgements');
              }}
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#0D47A1] bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors"
            >
              View Acknowledgements
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <WebsiteImage
            src={choirSupportImg}
            alt="Church choir and community members singing hymns together in a bright sanctuary"
            aspectClassName="aspect-4/3"
            caption="Community participation, proofreading, and sharing help serve congregations everywhere."
          />
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-semibold">
            <FileCheck2 className="w-4 h-4 text-[#0D47A1] dark:text-blue-400 shrink-0" />
            <h2 className="font-serif text-lg">Proofread &amp; Report Corrections</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            If you spot a spelling mistake, missing verse, or mismatched English translation in Bemba, Tonga, or Chewa hymns, let us know the hymn number and stanza so we can keep the text accurate.
          </p>
        </section>

        <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-semibold">
            <Share2 className="w-4 h-4 text-[#0D47A1] dark:text-blue-400 shrink-0" />
            <h2 className="font-serif text-lg">Share with Your Congregation</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Introduce Kristu mu Nyimbo to church members, choir directors, youth groups, and media teams who can use the offline hymnal and side-by-side projector view.
          </p>
        </section>

        <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-semibold">
            <MessageSquare className="w-4 h-4 text-[#0D47A1] dark:text-blue-400 shrink-0" />
            <h2 className="font-serif text-lg">Share Practical Feedback</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Tell us how the app performs on your phone, tablet, or church projector. Practical suggestions from real worship settings guide future improvements.
          </p>
        </section>

        <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-semibold">
            <HeartHandshake className="w-4 h-4 text-[#0D47A1] dark:text-blue-400 shrink-0" />
            <h2 className="font-serif text-lg">Keep the Project in Prayer</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Pray that this tool continues to serve believers faithfully and helps congregations lift their voices together in praise.
          </p>
        </section>
      </div>

      <section className="rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="font-serif text-lg font-semibold text-slate-900 dark:text-slate-100">
            Want to help with proofreading or feedback?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Send us a note through the Contact page or open the app to start using it right away.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/contact');
            }}
            className="px-4 py-2.5 rounded-xl bg-[#0B3B8C] hover:bg-blue-950 text-white text-sm font-semibold transition-colors whitespace-nowrap"
          >
            Contact Us
          </a>
          <a
            href="/app"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/app');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#0D47A1] text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors whitespace-nowrap"
          >
            <span>Open App</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
