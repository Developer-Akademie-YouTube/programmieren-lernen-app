const CACHE_NAME = 'programmieren-lernen-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/icons/android/play_store_512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => resp || fetch(event.request))
  );
});
