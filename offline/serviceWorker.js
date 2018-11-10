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

self.addEventListener('install', event => {
  const preLoaded = caches
    .open(VERSION)
    .then(cache => cache.addAll(urlsToCache))
    .catch(handleCacheError);
  event.waitUntil(preLoaded);
});

self.addEventListener('activate', event => {
  const filterObsoleteCaches = key => key !== VERSION;
  event.waitUntil(
    caches
      .keys()
      .then(keys => Promise.all(keys.filter(filterObsoleteCaches).map(key => caches.delete(key)))),
  );
});

self.addEventListener('fetch', event => {
  const { destination } = event.request;
  // DevTools opening will trigger these o-i-c requests, which SW can't handle - avoid error in console
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
    return;
  }
  // Configure caching strategies according to request type
  switch (destination) {
    case 'style':
    case 'script':
    case 'document':
    case 'font':
    case 'image': {
      const requestURL = new URL(event.request.url);
      if (requestURL.origin === location.origin) {
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

function fetchFromCacheThenNetwork(event) {
  const response = caches.open(VERSION).then(cache => {
    const storeInCache = responseToCache => {
      cache
        .put(event.request, responseToCache.clone())
        .catch(err => handleCacheError(err, event.request.url));
      return responseToCache;
    };

    // Try the cache, otherwise fallback to network and cache the response
    return cache
      .match(event.request)
      .then(
        responseFromCache =>
          responseFromCache || fetch(event.request).then(storeInCache, handleFetchError),
      );
  });
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
