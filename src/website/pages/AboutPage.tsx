import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WebsiteRoute } from '../routes';
import { WebsiteImage } from '../components/WebsiteImage';
import fellowshipImg from '../../assets/images/about_fellowship_unity_1794941033113.jpg';

interface AboutPageProps {
  onNavigate: (route: WebsiteRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12">
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-6 space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            About Kristu mu Nyimbo
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Kristu mu Nyimbo is a multilingual Seventh-day Adventist digital hymnal and English Bible Progressive Web App designed to make congregational worship and personal devotion accessible across languages, even without an internet connection.
          </p>
        </div>

        <div className="lg:col-span-6">
          <WebsiteImage
            src={fellowshipImg}
            alt="Church members gathered around a table reading hymnbooks and the Bible together in fellowship"
            aspectClassName="aspect-4/3"
            caption="Fellowship and shared worship across Bemba, Tonga, Chewa, and English language communities."
          />
        </div>
      </header>

      <div className="space-y-8 border-t border-slate-200 dark:border-slate-800 pt-10 max-w-4xl">
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            01. Purpose
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Many congregations, families, and choirs worship across multiple languages. Carrying separate printed hymnals and Bibles — or projecting hymns clearly for everyone to follow — can be difficult, especially in areas with limited or unreliable internet connectivity. Kristu mu Nyimbo brings Bemba, Tonga, Chewa, and English hymns together with an English Bible in one lightweight application that works offline on phones, tablets, laptops, and projectors.
          </p>
        </section>

        <section className="space-y-3 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            02. Mission
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Our mission is to provide a clear, dependable, and distraction-free digital worship companion that supports singing in local languages alongside English, simplifies Scripture reading, and remains usable anywhere — whether online or completely offline.
          </p>
        </section>

        <section className="space-y-3 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            03. Vision
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            We envision a worship experience where every believer — from youth groups and choirs to seniors and rural congregations — can easily find hymns, read side by side across languages, and engage with Scripture on the devices they already use every day.
          </p>
        </section>

        <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-semibold text-slate-900 dark:text-slate-100">
              Acknowledgements &amp; App Access
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              View contributor and source acknowledgements or open the hymnal app directly.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/acknowledgements"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/acknowledgements');
              }}
              className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#0D47A1] text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors whitespace-nowrap"
            >
              Acknowledgements
            </a>
            <a
              href="/app"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/app');
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B3B8C] hover:bg-blue-950 text-white text-sm font-semibold transition-colors whitespace-nowrap"
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
