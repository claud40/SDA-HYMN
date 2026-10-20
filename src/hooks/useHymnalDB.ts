import { useState, useEffect, useCallback } from 'react';
import { Hymn, SAMPLE_HYMNS, WorshipProgramItem, DEFAULT_SABBATH_PROGRAM } from '../data/hymns';
import { hymnalDB, RecentHymnRecord } from '../services/db';

export function useHymnalDB() {
  const [hymns, setHymns] = useState<Hymn[]>(SAMPLE_HYMNS);
  const [favorites, setFavorites] = useState<string[]>(['hymn-1', 'hymn-7', 'hymn-72']);
  const [recentHymns, setRecentHymns] = useState<RecentHymnRecord[]>([]);
  const [servicePlan, setServicePlan] = useState<WorshipProgramItem[]>(DEFAULT_SABBATH_PROGRAM);
  const [isDBReady, setIsDBReady] = useState(false);

  // Initialize and load from IndexedDB
  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const [loadedHymns, loadedFavorites, loadedRecent, loadedPlan] = await Promise.all([
          hymnalDB.getAllHymns(),
          hymnalDB.getFavoriteIds(),
          hymnalDB.getRecentHymns(),
          hymnalDB.getServicePlan(),
        ]);

        if (isMounted) {
          if (loadedHymns.length > 0) setHymns(loadedHymns);
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
  }, []);

  const toggleFavorite = useCallback(async (hymnId: string) => {
    // Optimistic UI update
    setFavorites((prev) =>
      prev.includes(hymnId) ? prev.filter((id) => id !== hymnId) : [...prev, hymnId]
    );
    // Persist to IndexedDB
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

  return {
    hymns,
    favorites,
    recentHymns,
    servicePlan,
    isDBReady,
    toggleFavorite,
    recordRecentHymn,
  };
}
