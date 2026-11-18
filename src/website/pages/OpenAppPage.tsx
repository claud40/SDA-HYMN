import React from 'react';
import { ArrowUpRight, Smartphone, Monitor, WifiOff } from 'lucide-react';
import { AdventistLogo } from '../../components/AdventistLogo';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { WebsiteRoute } from '../routes';
import { InstallPWAButton } from '../components/InstallPWAButton';
import { DownloadApplicationSection } from '../components/DownloadApplicationSection';

interface OpenAppPageProps {
  onNavigate: (route: WebsiteRoute) => void;
}

export const OpenAppPage: React.FC<OpenAppPageProps> = ({ onNavigate }) => {
  const { isIOS } = usePWAInstall();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12">
      {/* Main Launch Card */}
      <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 p-2 rounded-2xl bg-[#F3F7FD] dark:bg-slate-800 border border-blue-500/25 flex items-center justify-center shrink-0">
            <AdventistLogo className="w-full h-full" />
          </div>
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Open Kristu mu Nyimbo
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Bemba · Tonga · Chewa · English · Offline English Bible
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Launch the Kristu mu Nyimbo hymnal and Bible Progressive Web App directly in your browser, or install it on your device for one-tap offline access during worship.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <InstallPWAButton
            onNavigate={onNavigate}
            label="INSTALL KRISTU MU NYIMBO"
            installedLabel="OPEN KRISTU MU NYIMBO"
            variant="primary"
          />

          <a
            href="/app"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/app');
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#0D47A1] dark:hover:border-blue-500 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
          >
            <span>Open Hymnal App</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Dedicated Download Application Section */}
      <DownloadApplicationSection onNavigate={onNavigate} compact />

      {/* Installation Instructions by Platform */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            How to install the PWA
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Installing places Kristu mu Nyimbo on your home screen or desktop and keeps hymns available offline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
              <Smartphone className="w-4 h-4 text-[#0D47A1] dark:text-blue-400 shrink-0" />
              <span>Android (Chrome)</span>
            </div>
            <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed list-decimal list-inside">
              <li>Open the app using the button above.</li>
              <li>Tap the three-dot menu in the top-right corner of Chrome.</li>
              <li>Select <strong>Install app</strong> or <strong>Add to Home screen</strong>.</li>
            </ol>
          </div>

          <div
            className={`rounded-2xl bg-white dark:bg-slate-900 border p-6 space-y-3 ${
              isIOS
                ? 'border-[#0D47A1]/60 dark:border-blue-500/60'
                : 'border-slate-200 dark:border-slate-800'
            }`}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
              <Smartphone className="w-4 h-4 text-[#0D47A1] dark:text-blue-400 shrink-0" />
              <span>iPhone &amp; iPad (Safari)</span>
            </div>
            <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed list-decimal list-inside">
              <li>Open the app in Safari.</li>
              <li>Tap the <strong>Share</strong> icon in the toolbar.</li>
              <li>Scroll and tap <strong>Add to Home Screen</strong>, then confirm <strong>Add</strong>.</li>
            </ol>
          </div>

          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
              <Monitor className="w-4 h-4 text-[#0D47A1] dark:text-blue-400 shrink-0" />
              <span>Windows &amp; Mac</span>
            </div>
            <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed list-decimal list-inside">
              <li>Open the app in Chrome or Edge.</li>
              <li>Click the <strong>Install</strong> icon on the right side of the address bar.</li>
              <li>Click <strong>Install</strong> to add it to your desktop or Start menu.</li>
            </ol>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-5 flex items-start gap-3">
          <WifiOff className="w-5 h-5 text-[#0D47A1] dark:text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <strong>Tip for offline use:</strong> Open the app once while connected to the internet and switch to any hymn language or Bible version you plan to use so your device caches those files locally.
          </p>
        </div>
      </section>
    </div>
  );
};
