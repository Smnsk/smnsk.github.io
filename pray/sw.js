const staticCacheName = 'app-v1'

const assetUrls = [
  "/",
  "/index.html",
  "/sw.js",
  "/art.js",
  "/image/0.svg",
  "/image/1.svg",
  "/image/2.svg",
  "/image/3.svg",
  "/image/4.svg",
  "/image/5.svg",
  "/image/6.svg",
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