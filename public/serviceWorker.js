/* eslint no-restricted-globals: 0 */

const VERSION = 'jsheroesio-cache-1570831434622'; // will be replaced with a timestamp generated at build time by generateServiceWorker.js

// Application Shell
const urlsToCache = [
  '/',
  '/code-of-conduct',
  '/static/img/favicon.png',
  '/static/img/website-logo.svg',
];

/**
 * First event to fire: INSTALL
 * Cache basic stuff (Application Shell) needed for a functional version of the site.
 */
self.addEventListener('install', event => {
  const preLoaded = caches
    .open(VERSION)
    .then(cache => cache.addAll(urlsToCache))
    .then(() => self.skipWaiting())
    .catch(handleCacheError);
  event.waitUntil(preLoaded);
});

/**
 * Second event to fire: ACTIVATE
 * We delete previous version caches and take control from old sw
 */
self.addEventListener('activate', event => {
  const filterObsoleteCaches = key => key !== VERSION;
  const deleteOldCachesPromise = caches
    .keys()
    .then(keys => Promise.all(keys.filter(filterObsoleteCaches).map(key => caches.delete(key))));
  event.waitUntil(deleteOldCachesPromise.then(() => self.clients.claim()));
});

/**
 * After sw is installed, on subsequent page loads: FETCH
 * Here we configure caching strategies according to the request type.
 */
self.addEventListener('fetch', event => {
  const { destination, url, cache, mode } = event.request;
  // DevTools opening will trigger these o-i-c requests, which SW can't handle - avoid error in console
  if (cache === 'only-if-cached' && mode !== 'same-origin') {
    return;
  }

  // #296 Bypass service worker for PDFs due to Chrome bug (this code can be removed once Chrome v73 is released)
  if (url.toLowerCase().endsWith('.pdf')) {
    return;
  }

  switch (destination) {
    case 'style':
    case 'script':
    case 'document': {
      // Resources that are likely to change after each deploy
      fetchFromNetworkThenCache(event);
      return;
    }
    case 'font':
    case 'image': {
      // Resources that don't frequently change
      fetchFromCacheThenNetwork(event);
      return;
    }
    // All `XMLHttpRequest` or `fetch()` calls
    default: {
      fetchFromNetworkOnly(event);
    }
  }
});

function fetchFromNetworkOnly(event) {
  event.respondWith(fetch(event.request).catch(err => handleFetchError(err, event.request.url)));
}

/**
 * Caching strategy: Network falling back to cache
 * Give online users the most up-to-date content, but offline users get an older cached version.
 */
function fetchFromNetworkThenCache(event) {
  const response = caches.open(VERSION).then(cache =>
    fetch(event.request)
      .then(networkResponse => serveAndStoreInCache(cache, event, networkResponse))
      .catch(() =>
        cache.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return errorResponse();
        }),
      ),
  );
  event.respondWith(response);
}

/**
 * Caching strategy: Cache falling back to network
 * If there's a cached version available, use it, but fetch an update for next time.
 */
function fetchFromCacheThenNetwork(event) {
  const response = caches.open(VERSION).then(cache =>
    cache.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request)
        .then(networkResponse => serveAndStoreInCache(cache, event, networkResponse))
        .catch(errorResponse);
      return cachedResponse || fetchPromise;
    }),
  );
  event.respondWith(response);
}

function serveAndStoreInCache(cache, event, networkResponse) {
  const requestURL = new URL(event.request.url);
  if (requestURL.origin === location.origin) {
    // Site internal resources
    cache
      .put(event.request, networkResponse.clone())
      .catch(err => handleCacheError(err, event.request.url));
  }
  return networkResponse;
}

function errorResponse() {
  return new Response('Network error', { status: 404, headers: { 'Content-Type': 'text/plain' } });
}

function handleFetchError(error, requestUrl) {
  if (requestUrl) {
    console.log(`Could not fetch resource "${requestUrl}"`, error); // eslint-disable-line
  } else {
    console.log('Could not fetch resource', error); // eslint-disable-line
  }
}

function handleCacheError(error, requestUrl) {
  if (requestUrl) {
    console.log(`Could not add ${requestUrl} to cache`); // eslint-disable-line
  } else {
    console.log('Could not add to cache', error); // eslint-disable-line
  }
}
