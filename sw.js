const CACHE_NAME = 'jiraya-fintech-shell-v2.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './Jiraya-free.png'
];

// Tahap Install: Menyimpan shell PWA ke cache peramban
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching App Shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Tahap Activate: Membersihkan cache versi lama jika ada
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Menghapus cache lama:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Tahap Fetch: Cache-First untuk aset shell lokal, Bypass (Network) untuk GAS & eksternal
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Jangan pernah cache request menuju Google Apps Script atau domain eksternal API
  if (url.origin !== location.origin || url.hostname.includes('google.com') || url.hostname.includes('googleusercontent.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});