const CACHE_NAME = "rondleiding-v1";

const FILES = [
  "./",
  "./index.html.html",
  "./manifest.json",
  "./afbeeldingen/achtergrond.jpg",
  "./afbeeldingen/logo.png",
  "./afbeeldingen/victor.png",
  "./afbeeldingen/morgana.png",
  "./afbeeldingen/tom.png",
  "./afbeeldingen/achtergrond.mp4"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
