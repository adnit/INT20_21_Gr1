self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('kinofikecache').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles/style.css',
        '/scripts/movies-catalog.js',
        '/scripts/slideshow.js',
        '/scripts/location.js',
        '/scripts/theme.js',
        '/images/movies/TheIrishman.jpg',
        '/images/favicon.ico',
        '/images/movies/HomeAlone.jpg',
        '/images/movies/Tenet.png',
        '/images/movies/HonestThief.jpeg',
        '/images/movies/Soul.jpeg',
        '/images/movies/Greenland.png',
        '/images/movies/SpenserConfidential.jpg',
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
