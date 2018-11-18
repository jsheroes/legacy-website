/* eslint no-restricted-globals: 0 */

const VERSION = 'jsheroesio-cache-v1';

// Application Shell
const urlsToCache = [
  '/',
  '/code-of-conduct',
  '/static/css/bootstrap-grid.min.css',
  '/static/img/favicon.png',
  '/static/img/speakers_and_organizers.jpg',
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
    .catch(handleCacheError);
  event.waitUntil(preLoaded);
});

/**
 * Second event to fire: ACTIVATE
 * We delete previous version caches.
 */
self.addEventListener('activate', event => {
  const filterObsoleteCaches = key => key !== VERSION;
  event.waitUntil(
    caches
      .keys()
      .then(keys => Promise.all(keys.filter(filterObsoleteCaches).map(key => caches.delete(key)))),
  );
});

/**
 * After sw is installed, on subsequent page loads: FETCH
 * Here we configure caching strategies according to the request type.
 */
self.addEventListener('fetch', event => {
  const { destination } = event.request;
  // DevTools opening will trigger these o-i-c requests, which SW can't handle - avoid error in console
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
    return;
  }

  switch (destination) {
    case 'style':
    case 'script':
    case 'document':
    case 'font':
    case 'image': {
      const requestURL = new URL(event.request.url);
      if (requestURL.origin === location.origin) {
        // Site internal resources
        fetchFromCacheThenNetwork(event);
      } else {
        // External requests such as google maps, analytics, etc
        fetchFromNetworkOnly(event);
      }
      return;
    }
    // All `XMLHttpRequest` or `fetch()` calls
    default: {
      fetchFromNetworkOnly(event);
    }
  }
});

function fetchFromNetworkOnly(event) {
  event.respondWith(fetch(event.request));
}

/**
 * Caching strategy: Stale-while-revalidate
 * If there's a cached version available, use it, but fetch an update for next time.
 */
function fetchFromCacheThenNetwork(event) {
  const response = caches.open(VERSION).then(cache =>
    cache.match(event.request).then(cachedResponse => {
      const serveAndStoreInCache = networkResponse => {
        cache
          .put(event.request, networkResponse.clone())
          .catch(err => handleCacheError(err, event.request.url));
        return networkResponse;
      };
      const fetchPromise = fetch(event.request).then(serveAndStoreInCache, handleFetchError);
      return cachedResponse || fetchPromise;
    }),
  );
  event.respondWith(response);
}

function handleFetchError(error) {
  console.log('Could not fetch resource', error); // eslint-disable-line
}

function handleCacheError(error, requestUrl) {
  if (requestUrl) {
    console.log(`Could not add ${requestUrl} to cache`); // eslint-disable-line
  } else {
    console.log('Could not add to cache', error); // eslint-disable-line
  }
}
