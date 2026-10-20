/**
 * Self-unregistering Service Worker
 * Ensures all Vite modules and preview requests pass directly to the network
 * and clears any stale or corrupted cached responses.
 */

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.claim())
  );
});

// Do not intercept any fetch requests in development/preview iframe
self.addEventListener('fetch', () => {
  // Let network handle directly
  return;
});
