import { Hymn, SAMPLE_HYMNS, WorshipProgramItem, DEFAULT_SABBATH_PROGRAM } from '../data/hymns';
import {
  validateHymnRecord,
  validateAndDeduplicateHymns,
  mergeWithDefaultHymns,
} from '../utils/hymnValidator';

const DB_NAME = 'KristuMuNyimboDB';
const DB_VERSION = 1;

export interface RecentHymnRecord {
  hymnId: string;
  number: number;
  title: string;
  timestamp: number;
}

class HymnalIndexedDB {
  private dbPromise: Promise<IDBDatabase> | null = null;

  private openDB(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      if (typeof window === 'undefined' || !window.indexedDB) {
        reject(new Error('IndexedDB is not available in this environment'));
        return;
      }

      let request: IDBOpenDBRequest;
      try {
        request = window.indexedDB.open(DB_NAME, DB_VERSION);
      } catch (err) {
        reject(err);
        return;
      }

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // 1. Hymns store
        if (!db.objectStoreNames.contains('hymns')) {
          const hymnStore = db.createObjectStore('hymns', { keyPath: 'id' });
          hymnStore.createIndex('number', 'number', { unique: true });
          hymnStore.createIndex('category', 'category', { unique: false });
        }

        // 2. Favorites store
        if (!db.objectStoreNames.contains('favorites')) {
          db.createObjectStore('favorites', { keyPath: 'hymnId' });
        }

        // 3. Sabbath Service program store
        if (!db.objectStoreNames.contains('servicePlan')) {
          db.createObjectStore('servicePlan', { keyPath: 'id' });
        }

        // 4. Recently viewed history
        if (!db.objectStoreNames.contains('recentHistory')) {
          const historyStore = db.createObjectStore('recentHistory', { keyPath: 'hymnId' });
          historyStore.createIndex('timestamp', 'timestamp', { unique: false });
        }
      };

      request.onsuccess = async () => {
        const db = request.result;
        // Auto-seed sample hymns with validation & deduplication
        try {
          await this.seedInitialData(db);
        } catch {
          // Non-critical seed fallback
        }
        resolve(db);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });

    return this.dbPromise;
  }

  private async seedInitialData(db: IDBDatabase): Promise<void> {
    return new Promise((resolve) => {
      const tx = db.transaction(['hymns', 'servicePlan'], 'readwrite');
      const hymnStore = tx.objectStore('hymns');
      const planStore = tx.objectStore('servicePlan');

      // Always validate and deduplicate baseline hymns before putting
      const { validHymns } = validateAndDeduplicateHymns(SAMPLE_HYMNS);
      validHymns.forEach((hymn) => {
        hymnStore.put(hymn);
      });

      const planCount = planStore.count();
      planCount.onsuccess = () => {
        if (planCount.result === 0) {
          DEFAULT_SABBATH_PROGRAM.forEach((item) => {
            planStore.put(item);
          });
        }
      };

      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  }

  // --- HYMNS ---
  async getAllHymns(): Promise<Hymn[]> {
    try {
      const db = await this.openDB();
      return new Promise((resolve) => {
        const tx = db.transaction('hymns', 'readonly');
        const store = tx.objectStore('hymns');
        const req = store.getAll();

        req.onsuccess = () => {
          const rawItems = (req.result as unknown[]) || [];
          // 1. Strictly validate every record and deduplicate by hymn number
          const { validHymns } = validateAndDeduplicateHymns(rawItems);

          // 2. Safely merge with baseline default hymns to guarantee no deletions or missing songs
          const completeHymns = mergeWithDefaultHymns(validHymns, SAMPLE_HYMNS);
          resolve(completeHymns);
        };

        req.onerror = () => {
          const { validHymns } = validateAndDeduplicateHymns(SAMPLE_HYMNS);
          resolve(validHymns);
        };
      });
    } catch {
      const { validHymns } = validateAndDeduplicateHymns(SAMPLE_HYMNS);
      return validHymns;
    }
  }

  async getHymnByNumber(number: number): Promise<Hymn | null> {
    if (!number || typeof number !== 'number' || number <= 0) return null;
    try {
      const all = await this.getAllHymns();
      return all.find((h) => h.number === number) || null;
    } catch {
      return SAMPLE_HYMNS.find((h) => h.number === number) || null;
    }
  }

  /**
   * Safely saves or updates a single hymn record.
   * - Validates required fields (number, title, verses, choruses)
   * - Preserves original Bemba spelling and verse order
   * - Rejects corrupt or invalid objects
   */
  async saveHymn(candidate: unknown): Promise<{ success: boolean; hymn?: Hymn; error?: string }> {
    const validation = validateHymnRecord(candidate);
    if (!validation.isValid || !validation.hymn) {
      return { success: false, error: validation.error || 'Invalid hymn record structure.' };
    }

    const hymn = validation.hymn;
    try {
      const db = await this.openDB();
      return new Promise((resolve) => {
        const tx = db.transaction('hymns', 'readwrite');
        const store = tx.objectStore('hymns');
        store.put(hymn);
        tx.oncomplete = () => resolve({ success: true, hymn });
        tx.onerror = () => resolve({ success: false, error: 'Database transaction failed.' });
      });
    } catch (err) {
      return { success: false, error: (err as Error).message };
    }
  }

  /**
   * Safely imports and deduplicates a batch of hymns.
   * - Prevents duplicate hymn numbers
   * - Validates all required fields
   * - Protects existing hymn integrity
   */
  async importHymns(candidates: unknown[]): Promise<{
    importedCount: number;
    rejectedCount: number;
    duplicateCount: number;
    totalHymns: number;
  }> {
    const { validHymns, rejectedCount, duplicateCount } = validateAndDeduplicateHymns(candidates);
    if (validHymns.length === 0) {
      const current = await this.getAllHymns();
      return { importedCount: 0, rejectedCount, duplicateCount, totalHymns: current.length };
    }

    try {
      const db = await this.openDB();
      return new Promise((resolve) => {
        const tx = db.transaction('hymns', 'readwrite');
        const store = tx.objectStore('hymns');
        validHymns.forEach((hymn) => store.put(hymn));
        tx.oncomplete = async () => {
          const all = await this.getAllHymns();
          resolve({
            importedCount: validHymns.length,
            rejectedCount,
            duplicateCount,
            totalHymns: all.length,
          });
        };
        tx.onerror = async () => {
          const all = await this.getAllHymns();
          resolve({
            importedCount: 0,
            rejectedCount: candidates.length,
            duplicateCount,
            totalHymns: all.length,
          });
        };
      });
    } catch {
      const all = await this.getAllHymns();
      return { importedCount: 0, rejectedCount: candidates.length, duplicateCount, totalHymns: all.length };
    }
  }

  // --- FAVORITES ---
  async getFavoriteIds(): Promise<string[]> {
    try {
      const db = await this.openDB();
      return new Promise((resolve) => {
        const tx = db.transaction('favorites', 'readonly');
        const store = tx.objectStore('favorites');
        const req = store.getAll();
        req.onsuccess = () => {
          const list = req.result as { hymnId: string }[];
          resolve(list ? list.map((item) => item.hymnId) : []);
        };
        req.onerror = () => resolve([]);
      });
    } catch {
      try {
        const saved = localStorage.getItem('bemba_sda_hymnal_favorites');
        return saved ? JSON.parse(saved) : ['hymn-1', 'hymn-7', 'hymn-72'];
      } catch {
        return ['hymn-1', 'hymn-7', 'hymn-72'];
      }
    }
  }

  async toggleFavorite(hymnId: string): Promise<string[]> {
    try {
      const db = await this.openDB();
      const current = await this.getFavoriteIds();
      const exists = current.includes(hymnId);

      return new Promise((resolve) => {
        const tx = db.transaction('favorites', 'readwrite');
        const store = tx.objectStore('favorites');

        if (exists) {
          store.delete(hymnId);
        } else {
          store.put({ hymnId, createdAt: Date.now() });
        }

        tx.oncomplete = () => {
          const updated = exists ? current.filter((id) => id !== hymnId) : [...current, hymnId];
          try {
            localStorage.setItem('bemba_sda_hymnal_favorites', JSON.stringify(updated));
          } catch {
            // localstorage backup
          }
          resolve(updated);
        };
        tx.onerror = () => resolve(current);
      });
    } catch {
      return ['hymn-1', 'hymn-7', 'hymn-72'];
    }
  }

  // --- RECENT HISTORY ---
  async addRecentHymn(hymn: Hymn): Promise<void> {
    try {
      const db = await this.openDB();
      const tx = db.transaction('recentHistory', 'readwrite');
      const store = tx.objectStore('recentHistory');
      store.put({
        hymnId: hymn.id,
        number: hymn.number,
        title: hymn.title,
        timestamp: Date.now()
      });
    } catch {
      // Ignore
    }
  }

  async getRecentHymns(limit = 6): Promise<RecentHymnRecord[]> {
    try {
      const db = await this.openDB();
      return new Promise((resolve) => {
        const tx = db.transaction('recentHistory', 'readonly');
        const store = tx.objectStore('recentHistory');
        const req = store.getAll();
        req.onsuccess = () => {
          const items = (req.result as RecentHymnRecord[]) || [];
          items.sort((a, b) => b.timestamp - a.timestamp);
          resolve(items.slice(0, limit));
        };
        req.onerror = () => resolve([]);
      });
    } catch {
      return [];
    }
  }

  // --- SERVICE SETLIST ---
  async getServicePlan(): Promise<WorshipProgramItem[]> {
    try {
      const db = await this.openDB();
      return new Promise((resolve) => {
        const tx = db.transaction('servicePlan', 'readonly');
        const store = tx.objectStore('servicePlan');
        const req = store.getAll();
        req.onsuccess = () => {
          if (req.result && req.result.length > 0) {
            resolve(req.result as WorshipProgramItem[]);
          } else {
            resolve(DEFAULT_SABBATH_PROGRAM);
          }
        };
        req.onerror = () => resolve(DEFAULT_SABBATH_PROGRAM);
      });
    } catch {
      return DEFAULT_SABBATH_PROGRAM;
    }
  }
}

export const hymnalDB = new HymnalIndexedDB();
