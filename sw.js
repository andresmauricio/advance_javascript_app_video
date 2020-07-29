self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  // * Buscar cache
  event.respondWith(cachedResponsed(request));

  // * Actualizar cache
  event.respondWith(updateCache(request));
});

async function precache() {
  const cache = await caches.open("v1");
  return cache.addAll([
    "/",
    "assets/index.js",
    "assets/MediaPlayer.js",
    "assets/plugins/AutoPause.js",
    "assets/plugins/AutoPlay.js",
    "assets/style.css",
    "assets/video.mp4",
  ]);
}

async function cachedResponsed(request) {
  const cache = await caches.open("v1");
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open("v1");
  const response = fetch(request);
  return cache.put(request, response);
}
