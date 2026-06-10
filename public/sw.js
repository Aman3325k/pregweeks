const CACHE_NAME = 'pregweeks-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/favicon.ico',
  '/manifest.json',
  '/tools/due-date-calculator/',
  '/tools/ivf-calculator/',
  '/tools/weight-tracker/',
  '/tools/ovulation-calculator/',
  '/tools/kick-counter/',
  '/tools/contraction-timer/',
  '/tools/baby-cost-calculator/',
  '/tools/journal/',
  '/checklist/hospital-bag/',
  '/checklist/baby-shower/',
  '/checklist/nursery/',
  '/checklist/baby-gear/'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
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
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle local GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip caching external domains (e.g. analytics scripts)
  if (url.origin !== self.location.origin) return;

  // Normalize navigation requests to have trailing slashes
  let request = event.request;
  if (event.request.mode === 'navigate') {
    if (!url.pathname.endsWith('/') && !url.pathname.split('/').pop().includes('.')) {
      url.pathname += '/';
      request = new Request(url.toString(), {
        method: event.request.method,
        headers: event.request.headers,
        credentials: event.request.credentials,
        redirect: 'manual'
      });
    }
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      // Check if the requested asset is part of our static app shell
      const isStaticShell = ASSETS_TO_CACHE.some(asset => 
        url.pathname === asset || url.pathname === `${asset}/`
      );

      // Cache-first for the critical app shell assets
      if (cachedResponse && isStaticShell) {
        return cachedResponse;
      }

      // Stale-While-Revalidate for other pages (like /week/15) and compiled bundles
      const fetchPromise = fetch(request).then((networkResponse) => {
        // Only cache valid successful GET requests
        if (networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback
        return cachedResponse || caches.match('/index.html');
      });

      if (cachedResponse) {
        // Run fetchPromise in the background to revalidate cache
        event.waitUntil(fetchPromise);
        return cachedResponse;
      }

      return fetchPromise;
    })
  );
});
