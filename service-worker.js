const CACHE_NAME = 'farmagames-v1';
const urlsToCache = [
  'index.html',
  'css/estilo.css',
  'img/logo-farmagames.png',
  'img/icon-192.png',
  'img/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
