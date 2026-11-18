export interface InstallerRelease {
  readonly id: 'windows' | 'android';
  readonly title: string;
  readonly supportedOs: string;
  readonly shortDescription: string;
  readonly available: boolean;
  /**
   * Populate ONLY after a verified, tested installer is hosted over HTTPS.
   * Leave null until an official build is published.
   */
  readonly downloadUrl: string | null;
  readonly version: string | null;
  readonly fileSize: string | null;
  readonly releaseDate: string | null;
  readonly installSteps: readonly string[];
}

/**
 * Validates that an installer URL is a strict HTTPS link before rendering it as downloadable.
 * Prevents accidental exposure of local dev files, relative paths, or insecure HTTP links.
 */
export function isVerifiedHttpsDownloadUrl(url: string | null): url is string {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && parsed.hostname.length > 0;
  } catch {
    return false;
  }
}

export const WINDOWS_INSTALLER_RELEASE: InstallerRelease = {
  id: 'windows',
  title: 'Download for Windows',
  supportedOs: 'Windows 10 & Windows 11',
  shortDescription:
    'Packaged desktop installer built from the existing Kristu mu Nyimbo PWA, featuring a dedicated icon, Start Menu entry, standalone window, and full offline access.',
  available: false,
  downloadUrl: null,
  version: null,
  fileSize: null,
  releaseDate: null,
  installSteps: [
    'Once published, download the verified Windows installer over HTTPS from this page.',
    'Run the installer to add Kristu mu Nyimbo to your Start Menu and desktop with its own app icon.',
    'Launch Kristu mu Nyimbo independently of a browser with full offline hymn and Bible access.',
  ],
};

export const ANDROID_APK_RELEASE: InstallerRelease = {
  id: 'android',
  title: 'Download for Android',
  supportedOs: 'Android',
  shortDescription:
    'Direct Android APK package for installing Kristu mu Nyimbo on phones and tablets while preserving all four hymn languages, the English Bible, and offline support.',
  available: false,
  downloadUrl: null,
  version: null,
  fileSize: null,
  releaseDate: null,
  installSteps: [
    'Once an official APK has been built and tested, download the verified package over HTTPS from this page.',
    'Open the downloaded APK file on your Android device and follow the system installation prompt.',
    'Open Kristu mu Nyimbo from your app drawer for full offline access to hymns and the English Bible.',
  ],
};
