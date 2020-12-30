self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("kinofikecache").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles/style.css",
        "/scripts/movies-catalog.js",
        "/scripts/slideshow.js",
        "/scripts/location.js",
        "/images/movies/greenland.jpg",
        "/images/movies/tenet.jpg",
        "/images/movies/ww1984.jpg",
        "/images/searchIcon.png",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
