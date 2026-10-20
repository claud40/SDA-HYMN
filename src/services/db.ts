import { Hymn, SAMPLE_HYMNS, WorshipProgramItem, DEFAULT_SABBATH_PROGRAM } from '../data/hymns';

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
        // Auto-seed sample hymns if empty
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

      // Always ensure SAMPLE_HYMNS are up-to-date with writer and metadata
      SAMPLE_HYMNS.forEach((hymn) => {
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
      return new Promise((resolve, reject) => {
        const tx = db.transaction('hymns', 'readonly');
        const store = tx.objectStore('hymns');
        const req = store.getAll();
        req.onsuccess = () => {
          if (req.result && req.result.length > 0) {
            const hymnsWithWriter = (req.result as Hymn[]).map((h) => {
              if (!h.writer) {
                const sample = SAMPLE_HYMNS.find((s) => s.id === h.id || s.number === h.number);
                return { ...h, writer: sample?.writer || 'Traditional' };
              }
              return h;
            });
            resolve(hymnsWithWriter);
          } else {
            resolve(SAMPLE_HYMNS);
          }
        };
        req.onerror = () => resolve(SAMPLE_HYMNS);
      });
    } catch {
      return SAMPLE_HYMNS;
    }
  }

  async getHymnByNumber(number: number): Promise<Hymn | null> {
    try {
      const db = await this.openDB();
      return new Promise((resolve) => {
        const tx = db.transaction('hymns', 'readonly');
        const index = tx.objectStore('hymns').index('number');
        const req = index.get(number);
        req.onsuccess = () => resolve((req.result as Hymn) || null);
        req.onerror = () => resolve(null);
      });
    } catch {
      return SAMPLE_HYMNS.find((h) => h.number === number) || null;
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
