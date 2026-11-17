import { useState, useEffect, useCallback, useRef } from 'react';
import { Hymn, SAMPLE_HYMNS, WorshipProgramItem, DEFAULT_SABBATH_PROGRAM } from '../data/hymns';
import {
  HymnalLanguageId,
  getHymnalLanguageConfig,
  getStoredHymnalLanguage,
  saveHymnalLanguage,
} from '../data/languages';
import { hymnalDB, RecentHymnRecord } from '../services/db';
import { validateAndDeduplicateHymns } from '../utils/hymnValidator';

const LANGUAGE_CACHE_PREFIX = 'hymnal_lang_cache_v1_';

export function useHymnalDB() {
  const [activeLanguage, setActiveLanguage] = useState<HymnalLanguageId>(() =>
    getStoredHymnalLanguage()
  );
  const [hymns, setHymns] = useState<Hymn[]>(() => {
    return validateAndDeduplicateHymns(SAMPLE_HYMNS).validHymns;
  });
  const [isLoadingLanguage, setIsLoadingLanguage] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>(['hymn-1', 'hymn-7', 'hymn-72']);
  const [recentHymns, setRecentHymns] = useState<RecentHymnRecord[]>([]);
  const [servicePlan, setServicePlan] = useState<WorshipProgramItem[]>(DEFAULT_SABBATH_PROGRAM);
  const [isDBReady, setIsDBReady] = useState(false);

  const languageCatalogCache = useRef<Partial<Record<HymnalLanguageId, Hymn[]>>>({
    bemba: validateAndDeduplicateHymns(SAMPLE_HYMNS).validHymns,
  });

  const loadLanguageCatalog = useCallback(async (lang: HymnalLanguageId): Promise<Hymn[]> => {
    if (lang === 'bemba') {
      const loaded = await hymnalDB.getAllHymns();
      languageCatalogCache.current.bemba = loaded;
      return loaded;
    }

    if (languageCatalogCache.current[lang]) {
      return languageCatalogCache.current[lang]!;
    }

    const config = getHymnalLanguageConfig(lang);
    if (!config.available || !config.dataUrl) {
      return languageCatalogCache.current.bemba || SAMPLE_HYMNS;
    }

    // Try network/service-worker fetch first, fallback to localStorage cache if offline
    try {
      const res = await fetch(config.dataUrl);
      if (res.ok) {
        const raw = await res.json();
        const { validHymns } = validateAndDeduplicateHymns(raw);
        if (validHymns.length > 0) {
          languageCatalogCache.current[lang] = validHymns;
          try {
            localStorage.setItem(`${LANGUAGE_CACHE_PREFIX}${lang}`, JSON.stringify(validHymns));
          } catch {
            // Quota exceeded is non-fatal; SW cache handles offline as well
          }
          return validHymns;
        }
      }
    } catch {
      // Offline fallback below
    }

    try {
      const cached = localStorage.getItem(`${LANGUAGE_CACHE_PREFIX}${lang}`);
      if (cached) {
        const parsed = JSON.parse(cached);
        const { validHymns } = validateAndDeduplicateHymns(parsed);
        if (validHymns.length > 0) {
          languageCatalogCache.current[lang] = validHymns;
          return validHymns;
        }
      }
    } catch {
      // ignore
    }

    return languageCatalogCache.current.bemba || SAMPLE_HYMNS;
  }, []);

  // Initialize and load from IndexedDB + saved language
  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        await hymnalDB.fetchAndSyncStaticHymns();
        const [loadedBemba, loadedFavorites, loadedRecent, loadedPlan] = await Promise.all([
          hymnalDB.getAllHymns(),
          hymnalDB.getFavoriteIds(),
          hymnalDB.getRecentHymns(),
          hymnalDB.getServicePlan(),
        ]);

        languageCatalogCache.current.bemba = loadedBemba;
        const initialLang = getStoredHymnalLanguage();
        const initialHymns =
          initialLang === 'bemba' ? loadedBemba : await loadLanguageCatalog(initialLang);

        if (isMounted) {
          if (initialHymns && initialHymns.length > 0) setHymns(initialHymns);
          setFavorites(loadedFavorites);
          setRecentHymns(loadedRecent);
          setServicePlan(loadedPlan);
          setIsDBReady(true);
        }
      } catch {
        if (isMounted) {
          setIsDBReady(true);
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, [loadLanguageCatalog]);

  const switchLanguage = useCallback(
    async (lang: HymnalLanguageId) => {
      const config = getHymnalLanguageConfig(lang);
      if (!config.available) return;

      setIsLoadingLanguage(true);
      try {
        const nextHymns = await loadLanguageCatalog(lang);
        setActiveLanguage(lang);
        saveHymnalLanguage(lang);
        setHymns(nextHymns);
      } finally {
        setIsLoadingLanguage(false);
      }
    },
    [loadLanguageCatalog]
  );

  const toggleFavorite = useCallback(async (hymnId: string) => {
    setFavorites((prev) =>
      prev.includes(hymnId) ? prev.filter((id) => id !== hymnId) : [...prev, hymnId]
    );
    try {
      const updated = await hymnalDB.toggleFavorite(hymnId);
      setFavorites(updated);
    } catch {
      // Keep optimistic
    }
  }, []);

  const recordRecentHymn = useCallback(async (hymn: Hymn) => {
    await hymnalDB.addRecentHymn(hymn);
    const updated = await hymnalDB.getRecentHymns();
    setRecentHymns(updated);
  }, []);

  const clearRecentHistory = useCallback(async () => {
    await hymnalDB.clearRecentHistory();
    setRecentHymns([]);
  }, []);

  const saveHymn = useCallback(
    async (candidate: unknown) => {
      const result = await hymnalDB.saveHymn(candidate);
      if (result.success && result.hymn && activeLanguage === 'bemba') {
        const refreshed = await hymnalDB.getAllHymns();
        languageCatalogCache.current.bemba = refreshed;
        setHymns(refreshed);
      }
      return result;
    },
    [activeLanguage]
  );

  const deleteHymn = useCallback(
    async (hymnId: string) => {
      const success = await hymnalDB.deleteHymn(hymnId);
      if (success && activeLanguage === 'bemba') {
        const refreshed = await hymnalDB.getAllHymns();
        languageCatalogCache.current.bemba = refreshed;
        setHymns(refreshed);
      }
      return success;
    },
    [activeLanguage]
  );

  const importHymns = useCallback(
    async (candidates: unknown[]) => {
      const result = await hymnalDB.importHymns(candidates);
      if (result.importedCount > 0 && activeLanguage === 'bemba') {
        const refreshed = await hymnalDB.getAllHymns();
        languageCatalogCache.current.bemba = refreshed;
        setHymns(refreshed);
      }
      return result;
    },
    [activeLanguage]
  );

  const reloadHymns = useCallback(async () => {
    const refreshed = await loadLanguageCatalog(activeLanguage);
    setHymns(refreshed);
    return refreshed;
  }, [activeLanguage, loadLanguageCatalog]);

  return {
    hymns,
    activeLanguage,
    isLoadingLanguage,
    switchLanguage,
    favorites,
    recentHymns,
    servicePlan,
    isDBReady,
    toggleFavorite,
    recordRecentHymn,
    clearRecentHistory,
    saveHymn,
    deleteHymn,
    importHymns,
    reloadHymns,
  };
}
