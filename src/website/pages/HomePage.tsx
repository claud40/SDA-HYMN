import React from 'react';
import {
  Music,
  BookOpen,
  WifiOff,
  Download,
  Globe,
  CloudCheck,
  Languages,
  ArrowRight,
  Play,
} from 'lucide-react';
import { WebsiteRoute } from '../routes';
import { InstallPWAButton } from '../components/InstallPWAButton';
import { DownloadApplicationSection } from '../components/DownloadApplicationSection';
import heroWorshipImg from '../../assets/images/hero_worship_sanctuary_1794941050573.jpg';
import aboutBibleImg from '../../assets/images/help_digital_worship_clean_1795018337461.jpg';

interface HomePageProps {
  onNavigate: (route: WebsiteRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: WebsiteRoute) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* 1. Full-Bleed Hero Banner with Gradient Overlay & Worship Photography */}
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800 bg-[#EEF4FC] dark:bg-slate-900">
        {/* Background Worship Image positioned right on desktop */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={heroWorshipImg}
            alt="Congregation singing hymns together in worship"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center lg:object-[75%_center]"
          />
          {/* Smooth Light-to-Transparent Scrim matching reference */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F8FD]/98 via-[#F4F8FD]/90 lg:via-[#F4F8FD]/82 to-[#F4F8FD]/45 lg:to-transparent dark:from-slate-950/95 dark:via-slate-950/85 dark:to-slate-950/35" />
        </div>

        {/* Hero Foreground Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-xl space-y-5">
            <div className="space-y-1.5">
              <h1
                className="font-serif font-bold text-[#0B2E6B] dark:text-white tracking-tight leading-[1.08]"
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)',
                  textWrap: 'balance',
                }}
              >
                Kristu mu Nyimbo
              </h1>
              <p className="font-serif italic font-semibold text-xl sm:text-2xl text-[#0D47A1] dark:text-blue-300">
                Worship, Learn and Grow in Christ
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed max-w-md font-serif">
              A multilingual Seventh-day Adventist hymnal with hymns in Bemba, Tonga, Chewa and English, together with the English Bible.
            </p>

            {/* Three Compact Icon Highlights */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
              <div className="flex items-center gap-2.5">
                <span className="w-10 h-10 rounded-full bg-[#DCE9FB] dark:bg-blue-950/80 text-[#0B3B8C] dark:text-blue-300 flex items-center justify-center shrink-0">
                  <Music className="w-5 h-5" />
                </span>
                <span className="text-xs sm:text-sm font-serif font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                  4 Hymn
                  <br />
                  Languages
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="w-10 h-10 rounded-full bg-[#DCE9FB] dark:bg-blue-950/80 text-[#0B3B8C] dark:text-blue-300 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </span>
                <span className="text-xs sm:text-sm font-serif font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                  English
                  <br />
                  Bible
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="w-10 h-10 rounded-full bg-[#DCE9FB] dark:bg-blue-950/80 text-[#0B3B8C] dark:text-blue-300 flex items-center justify-center shrink-0">
                  <WifiOff className="w-5 h-5" />
                </span>
                <span className="text-xs sm:text-sm font-serif font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                  Works
                  <br />
                  Offline
                </span>
              </div>
            </div>

            {/* Primary Install CTA + Secondary Learn More CTA */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <InstallPWAButton
                onNavigate={onNavigate}
                label="INSTALL KRISTU MU NYIMBO"
                installedLabel="OPEN KRISTU MU NYIMBO"
                variant="primary"
              />

              <a
                href="/about"
                onClick={(e) => handleNav(e, '/about')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#0B3B8C]/40 dark:border-blue-400/40 bg-white/95 dark:bg-slate-900/95 hover:bg-white dark:hover:bg-slate-800 text-[#0B2E6B] dark:text-blue-200 text-xs sm:text-sm font-bold transition-colors shadow-xs whitespace-nowrap"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Feature Cards Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Easy Installation */}
          <div className="rounded-2xl bg-[#F3F7FD] dark:bg-slate-900 border border-[#E1ECFA] dark:border-slate-800 p-5 flex items-center gap-4">
            <span className="w-14 h-14 rounded-full bg-gradient-to-b from-[#1976D2] to-[#0B3B8C] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Download className="w-7 h-7" />
            </span>
            <div className="min-w-0">
              <h2 className="font-serif font-bold text-base text-[#0B2E6B] dark:text-white leading-snug">
                Easy Installation
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Click the button to install the Kristu mu Nyimbo app on your device.
              </p>
            </div>
          </div>

          {/* Card 2: Access Anywhere */}
          <div className="rounded-2xl bg-[#F3F7FD] dark:bg-slate-900 border border-[#E1ECFA] dark:border-slate-800 p-5 flex items-center gap-4">
            <span className="w-14 h-14 rounded-full bg-gradient-to-b from-[#1976D2] to-[#0B3B8C] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Globe className="w-7 h-7" />
            </span>
            <div className="min-w-0">
              <h2 className="font-serif font-bold text-base text-[#0B2E6B] dark:text-white leading-snug">
                Access Anywhere
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Use it on Android, Windows, macOS, Linux and iOS.
              </p>
            </div>
          </div>

          {/* Card 3: Offline Ready */}
          <div className="rounded-2xl bg-[#F3F7FD] dark:bg-slate-900 border border-[#E1ECFA] dark:border-slate-800 p-5 flex items-center gap-4">
            <span className="w-14 h-14 rounded-full bg-gradient-to-b from-[#1976D2] to-[#0B3B8C] text-white flex items-center justify-center shrink-0 shadow-xs">
              <CloudCheck className="w-7 h-7" />
            </span>
            <div className="min-w-0">
              <h2 className="font-serif font-bold text-base text-[#0B2E6B] dark:text-white leading-snug">
                Offline Ready
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Read hymns and the Bible even without internet.
              </p>
            </div>
          </div>

          {/* Card 4: Multilingual */}
          <div className="rounded-2xl bg-[#F3F7FD] dark:bg-slate-900 border border-[#E1ECFA] dark:border-slate-800 p-5 flex items-center gap-4">
            <span className="w-14 h-14 rounded-full bg-gradient-to-b from-[#1976D2] to-[#0B3B8C] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Languages className="w-7 h-7" />
            </span>
            <div className="min-w-0">
              <h2 className="font-serif font-bold text-base text-[#0B2E6B] dark:text-white leading-snug">
                Multilingual
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Enjoy hymns in Bemba, Tonga, Chewa and English.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Dedicated Download Application Section */}
      <DownloadApplicationSection onNavigate={onNavigate} />

      {/* 3. Two Large Split Cards: About Kristu mu Nyimbo & Need Help? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Card: About Kristu mu Nyimbo */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-r from-[#EBF2FC] to-[#F3F7FD] dark:from-slate-900 dark:to-slate-900 border border-[#DCE7F7] dark:border-slate-800 overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-stretch">
            <div className="sm:col-span-5 relative min-h-[180px] bg-slate-200 dark:bg-slate-800">
              <img
                src={aboutBibleImg}
                alt="Open Bible and digital hymn reading on tablet and phone"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-center space-y-3">
              <h2 className="font-serif font-bold text-2xl text-[#0B2E6B] dark:text-white leading-tight">
                About Kristu mu Nyimbo
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
                Our aim is to make hymns and the Bible easily accessible to everyone, in their preferred language, on any device.
              </p>
              <div className="pt-1">
                <a
                  href="/about"
                  onClick={(e) => handleNav(e, '/about')}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#0B3B8C] hover:bg-[#0D47A1] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Card: Need Help? */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-r from-[#FDF6E4] to-[#FEF9EC] dark:from-slate-900 dark:to-slate-900 border border-[#F3E5C2] dark:border-slate-800 p-6 sm:p-7 flex items-center justify-between gap-4">
            <div className="space-y-3 max-w-xs">
              <h2 className="font-serif font-bold text-2xl text-[#0B2E6B] dark:text-white leading-tight">
                Need Help?
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
                Find guides, answers and support for using the application.
              </p>
              <div className="pt-1">
                <a
                  href="/help"
                  onClick={(e) => handleNav(e, '/help')}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#0B3B8C] hover:bg-[#0D47A1] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <span>Get Help</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Clean Support Headset & Question Illustration */}
            <div className="hidden xs:flex sm:flex shrink-0 items-center justify-center pr-1" aria-hidden="true">
              <svg
                viewBox="0 0 130 115"
                className="w-24 h-22 sm:w-28 sm:h-24 text-[#0D47A1] dark:text-blue-400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Headset arch */}
                <path
                  d="M28 52C28 33 41 20 56 20C71 20 84 33 84 52"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                {/* Ear cups */}
                <rect x="22" y="46" width="10" height="20" rx="5" fill="currentColor" />
                <rect x="80" y="46" width="10" height="20" rx="5" fill="currentColor" />
                {/* Head */}
                <circle cx="56" cy="52" r="17" fill="currentColor" />
                {/* Shoulders */}
                <path
                  d="M20 105C22 86 35 76 56 76C77 76 90 86 92 105H20Z"
                  fill="currentColor"
                />
                {/* Collar notch */}
                <path d="M48 77L56 90L64 77" fill="#FDF6E4" />
                {/* Question speech bubble */}
                <circle cx="106" cy="36" r="19" fill="#FFFFFF" stroke="currentColor" strokeWidth="3.5" />
                <path d="M92 49L87 57L98 53" fill="#FFFFFF" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <text
                  x="106"
                  y="44"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="24"
                  fontWeight="700"
                  fontFamily="Georgia, serif"
                >
                  ?
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
