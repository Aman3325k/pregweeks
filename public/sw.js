const CACHE_NAME = 'pregweeks-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/favicon.ico',
  '/manifest.json',
  '/tools/due-date-calculator',
  '/tools/ivf-calculator',
  '/tools/weight-tracker',
  '/tools/ovulation-calculator',
  '/tools/kick-counter',
  '/tools/contraction-timer',
  '/tools/baby-cost-calculator',
  '/tools/journal',
  '/checklist/hospital-bag',
  '/checklist/baby-shower',
  '/checklist/nursery',
  '/checklist/baby-gear',
  '/week/1',
  '/week/2',
  '/week/3',
  '/week/4',
  '/week/5',
  '/week/6',
  '/week/7',
  '/week/8',
  '/week/9',
  '/week/10',
  '/week/11',
  '/week/12'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
