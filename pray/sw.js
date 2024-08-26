const staticCacheName = 'app-v1'

const assetUrls = [
  "/",
  "/index.html",
  "/sw.js",
  "/art.js",
  "/image/chevron-down-solid.svg",
  "/image/circle-info-soli.svg",
  "/image/circle-xmark-regular.svg",
  "/image/font-solid.svg",
  "/image/hands-praying-solid.svvg",
  "/image/language-solid.svg",
  "/image/logo.svg",
  "/image/m-solid.svg",
  "/image/moon-solid.svg",
  "/image/sort-down-solid.svg",
  "/image/sun-solid.svg",
  "/image/sun-warm-solid.svg",
  "/image/sunrise-icon.svg",
  "/art.css",
]

self.addEventListener('install', event => {
  console.log("install SW",)
  event.waitUntil((async () => {
    const cache = await caches.open(staticCacheName)
    await cache.addAll(assetUrls)
  }))
})

self.addEventListener('activate', async event => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(assetUrls)
})

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(staticCacheName);

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
      try {
        // If the resource was not in the cache, try the network.
        const fetchResponse = await fetch(event.request);

        // Save the resource in the cache and return it.
        cache.put(event.request, fetchResponse.clone());
        return fetchResponse;
      } catch (e) {
        // The network failed.
      }
    }
  })());
});