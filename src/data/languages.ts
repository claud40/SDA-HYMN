export type HymnalLanguageId = 'bemba' | 'tonga' | 'chewa' | 'kaonde';

export interface HymnalLanguageConfig {
  id: HymnalLanguageId;
  label: string;
  englishName: string;
  bookTitle: string;
  hymnCount: number;
  chorusLabel: string;
  available: boolean;
  dataUrl?: string;
  description: string;
}

export const HYMNAL_LANGUAGES: HymnalLanguageConfig[] = [
  {
    id: 'bemba',
    label: 'Icibemba',
    englishName: 'Bemba',
    bookTitle: 'Klistu Mu Nyimbo',
    hymnCount: 311,
    chorusLabel: 'Chibwekesho',
    available: true,
    dataUrl: '/data/hymns.json',
    description: 'Complete 311 hymns with paired English lyrics',
  },
  {
    id: 'tonga',
    label: 'Chitonga',
    englishName: 'Tonga',
    bookTitle: 'Kristu Mu Nyimbo',
    hymnCount: 341,
    chorusLabel: 'Ciindululo',
    available: true,
    dataUrl: '/data/hymnals/tonga.json',
    description: '341 hymns in Chitonga with English counterparts',
  },
  {
    id: 'chewa',
    label: 'Chichewa',
    englishName: 'Chewa',
    bookTitle: 'Khristu Mu Nyimbo',
    hymnCount: 350,
    chorusLabel: 'Chorus',
    available: true,
    dataUrl: '/data/hymnals/chewa.json',
    description: '350 hymns in Chichewa with English counterparts',
  },
  {
    id: 'kaonde',
    label: 'Kiikaonde',
    englishName: 'Kaonde',
    bookTitle: 'Nyimbo Ya Kutota Lesa',
    hymnCount: 0,
    chorusLabel: 'Chorus',
    available: false,
    description: 'Upcoming — Kiikaonde hymnal text coming soon',
  },
];

const LANGUAGE_STORAGE_KEY = 'hymnal_active_language';

export function getHymnalLanguageConfig(id: HymnalLanguageId): HymnalLanguageConfig {
  return HYMNAL_LANGUAGES.find((l) => l.id === id) || HYMNAL_LANGUAGES[0];
}

export function getStoredHymnalLanguage(): HymnalLanguageId {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as HymnalLanguageId | null;
    if (saved && HYMNAL_LANGUAGES.some((l) => l.id === saved && l.available)) {
      return saved;
    }
  } catch {
    // fallback
  }
  return 'bemba';
}

export function saveHymnalLanguage(lang: HymnalLanguageId): void {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // ignore storage errors
  }
}
