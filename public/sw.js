/**
 * Kristu Mu Nyimbo — Offline Service Worker
 * Enables complete offline access, reopening, and hymnbook reading
 * without requiring an internet connection.
 */

const CACHE_NAME = 'kristu-mu-nyimbo-v2';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/icon.svg',
  '/sda-logo.svg',
  '/adventist-logo.png',
  '/assets/aistudio/image_0ecea644.png',
];

// Precache essential application shell on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const asset of PRECACHE_ASSETS) {
        try {
          await cache.add(asset);
        } catch (err) {
          // Non-blocking for optional single assets
          console.warn('[SW] Precache item skipped:', asset, err);
        }
      }
    })
  );
  self.skipWaiting();
});

// Clean up old cache versions on activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

// Fetch interception for offline reading and reopening
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Ignore non-http schemes (e.g. chrome-extension:)
  if (!url.protocol.startsWith('http')) return;

  // 1. Navigation requests (Opening/reopening app, refreshing pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(async () => {
          // Device is offline — retrieve app shell from cache
          const cachedNavigate = await caches.match(event.request);
          if (cachedNavigate) return cachedNavigate;
          const cachedRoot = await caches.match('/');
          if (cachedRoot) return cachedRoot;
          const cachedIndex = await caches.match('/index.html');
          if (cachedIndex) return cachedIndex;
          return new Response('Offline: Kristu Mu Nyimbo is loading cached data.', {
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
          });
        })
    );
    return;
  }

  // 2. Static Assets, Scripts, Fonts, and Images
  // Strategy: Stale-While-Revalidate (Serve cached immediately, update in background)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          // If offline and not in cache, fallback gracefully
          return cachedResponse || Response.error();
        });

      return cachedResponse || fetchPromise;
    })
  );
});
