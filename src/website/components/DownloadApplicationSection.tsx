import React from 'react';
import {
  Monitor,
  Smartphone,
  Globe,
  Download,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { WebsiteRoute } from '../routes';
import { InstallPWAButton } from './InstallPWAButton';
import {
  WINDOWS_INSTALLER_RELEASE,
  ANDROID_APK_RELEASE,
  InstallerRelease,
  isVerifiedHttpsDownloadUrl,
} from '../downloadsConfig';

interface DownloadApplicationSectionProps {
  onNavigate: (route: WebsiteRoute) => void;
  compact?: boolean;
}

const InstallerCard: React.FC<{
  release: InstallerRelease;
  icon: React.ReactNode;
}> = ({ release, icon }) => {
  const canDownload = release.available && isVerifiedHttpsDownloadUrl(release.downloadUrl);

  return (
    <article className="rounded-2xl bg-[#F3F7FD] dark:bg-slate-900 border border-[#DCE7F7] dark:border-slate-800 p-6 flex flex-col justify-between gap-5">
      <div className="space-y-4">
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3.5">
            <span className="w-12 h-12 rounded-full bg-gradient-to-b from-[#1976D2] to-[#0B3B8C] text-white flex items-center justify-center shrink-0 shadow-xs">
              {icon}
            </span>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#0B2E6B] dark:text-white leading-snug">
                {release.title}
              </h3>
              <p className="text-xs font-medium text-[#1565C0] dark:text-blue-300 mt-0.5">
                {release.supportedOs}
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {release.shortDescription}
        </p>

        {/* Release Details (only display actually available fields) */}
        <dl className="rounded-xl bg-white/90 dark:bg-slate-950/70 border border-[#E1ECFA] dark:border-slate-800 p-3.5 space-y-2 text-xs">
          <div className="flex items-center justify-between gap-2">
            <dt className="text-slate-500 dark:text-slate-400">Supported OS</dt>
            <dd className="font-semibold text-slate-800 dark:text-slate-200 text-right">
              {release.supportedOs}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-2">
            <dt className="text-slate-500 dark:text-slate-400">Availability</dt>
            <dd
              className={`font-semibold text-right ${
                canDownload
                  ? 'text-emerald-700 dark:text-emerald-400'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {canDownload ? 'Available (Verified HTTPS)' : 'Not yet available'}
            </dd>
          </div>
          {release.version && (
            <div className="flex items-center justify-between gap-2">
              <dt className="text-slate-500 dark:text-slate-400">Version</dt>
              <dd className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                {release.version}
              </dd>
            </div>
          )}
          {release.fileSize && (
            <div className="flex items-center justify-between gap-2">
              <dt className="text-slate-500 dark:text-slate-400">File size</dt>
              <dd className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                {release.fileSize}
              </dd>
            </div>
          )}
          {release.releaseDate && (
            <div className="flex items-center justify-between gap-2">
              <dt className="text-slate-500 dark:text-slate-400">Release date</dt>
              <dd className="font-semibold text-slate-800 dark:text-slate-200">
                {release.releaseDate}
              </dd>
            </div>
          )}
        </dl>

        {/* Installation Instructions */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Installation Instructions
          </h4>
          <ol className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed list-decimal list-inside">
            {release.installSteps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Action Area */}
      <div className="pt-2 space-y-2">
        {canDownload ? (
          <a
            href={release.downloadUrl}
            rel="noopener noreferrer"
            download
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-b from-[#1565C0] to-[#0B3B8C] hover:from-[#1976D2] hover:to-[#0D47A1] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span>{release.title}</span>
          </a>
        ) : (
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-200/90 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-semibold cursor-not-allowed border border-slate-300/80 dark:border-slate-700"
          >
            <Clock className="w-4 h-4 shrink-0" />
            <span>Not Yet Available</span>
          </button>
        )}

        {!canDownload && (
          <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center leading-snug">
            A verified download link will appear here once this package is built and tested. In the meantime, use <strong>Open Web Application</strong> to install the PWA.
          </p>
        )}
      </div>
    </article>
  );
};

export const DownloadApplicationSection: React.FC<DownloadApplicationSectionProps> = ({
  onNavigate,
  compact = false,
}) => {
  return (
    <section
      id="download-application"
      aria-labelledby="download-application-heading"
      className={compact ? 'space-y-6' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6'}
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="space-y-1">
          <h2
            id="download-application-heading"
            className="font-serif font-bold text-2xl sm:text-3xl text-[#0B2E6B] dark:text-white tracking-tight"
          >
            Download Application
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Access Kristu mu Nyimbo on your preferred device with all four hymn languages, the English Bible, and offline reading support.
          </p>
        </div>
      </div>

      {/* Three Clearly Separated Options */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
        {/* 1. Download for Windows */}
        <InstallerCard
          release={WINDOWS_INSTALLER_RELEASE}
          icon={<Monitor className="w-6 h-6" />}
        />

        {/* 2. Download for Android */}
        <InstallerCard
          release={ANDROID_APK_RELEASE}
          icon={<Smartphone className="w-6 h-6" />}
        />

        {/* 3. Open Web Application (Available Now) */}
        <article className="rounded-2xl bg-white dark:bg-slate-900 border-2 border-[#0B3B8C]/25 dark:border-blue-500/30 p-6 flex flex-col justify-between gap-5 shadow-xs">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <span className="w-12 h-12 rounded-full bg-gradient-to-b from-[#1976D2] to-[#0B3B8C] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Globe className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#0B2E6B] dark:text-white leading-snug">
                    Open Web Application
                  </h3>
                  <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mt-0.5 inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Available Now (PWA)</span>
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Open Kristu mu Nyimbo directly in your browser or install it as a native Progressive Web App on your phone, tablet, or computer with full offline support.
            </p>

            {/* Available Metadata */}
            <dl className="rounded-xl bg-[#F3F7FD] dark:bg-slate-950/70 border border-[#E1ECFA] dark:border-slate-800 p-3.5 space-y-2 text-xs">
              <div className="flex items-center justify-between gap-2">
                <dt className="text-slate-500 dark:text-slate-400">Supported OS</dt>
                <dd className="font-semibold text-slate-800 dark:text-slate-200 text-right">
                  Windows, macOS, Linux, Android, iOS
                </dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-slate-500 dark:text-slate-400">Availability</dt>
                <dd className="font-semibold text-emerald-700 dark:text-emerald-400 text-right">
                  Ready to use &amp; install
                </dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-slate-500 dark:text-slate-400">Offline Access</dt>
                <dd className="font-semibold text-slate-800 dark:text-slate-200 text-right">
                  Supported after first load
                </dd>
              </div>
            </dl>

            {/* Installation Instructions */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Installation Instructions
              </h4>
              <ol className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed list-decimal list-inside">
                <li>Click <strong>Install Kristu mu Nyimbo</strong> below on Chrome, Edge, or Android to install directly.</li>
                <li>On iPhone or iPad (Safari), open the app, tap <strong>Share</strong>, and choose <strong>Add to Home Screen</strong>.</li>
                <li>Launch anytime from your home screen or desktop — works offline.</li>
              </ol>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col gap-2.5">
            <InstallPWAButton
              onNavigate={onNavigate}
              label="INSTALL KRISTU MU NYIMBO"
              installedLabel="OPEN KRISTU MU NYIMBO"
              variant="primary"
              className="w-full"
            />
            <a
              href="/app"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/app');
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#0B3B8C]/40 dark:border-blue-400/40 bg-white dark:bg-slate-900 hover:bg-[#F3F7FD] dark:hover:bg-slate-800 text-[#0B2E6B] dark:text-blue-200 text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Open in Browser</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </article>
      </div>

      {/* Security & Verification Notice */}
      <div className="rounded-2xl bg-[#F3F7FD] dark:bg-slate-900/70 border border-[#DCE7F7] dark:border-slate-800 p-4 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#0D47A1] dark:text-blue-400 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          <strong>Verified Downloads Only:</strong> Official Windows and Android installers will only be published on this page over secure HTTPS once they have been built, tested, and verified.
        </p>
      </div>
    </section>
  );
};
