const staticCacheName = 'app-v1'

const assetUrls = [
    "/",
    "/index.html",
    "sw.js", 
    "art.js", 
    "/pray/image/0.svg",
    "/pray/image/1.svg",
    "/pray/image/2.svg",
    "/pray/image/3.svg",
    "/pray/image/4.svg",
    "/pray/image/5.svg",
    "/pray/image/6.svg",
    "/pray/css/art.css",
]

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(assetUrls)
})

self.addEventListener('activate', event =>{
  console.log("activate SW")
})

self.addEventListener("fetch", (event) => {
  // Prevent the default, and handle the request ourselves.

  console.log("hello Fetch")
  event.respondWith(
    
    (async () => {
      // Try to get the response from a cache.
      const cachedResponse = await caches.match(event.request);
      // Return it if we found one.
      if (cachedResponse) return cachedResponse;
      // If we didn't find a match in the cache, use the network.
      return fetch(event.request);
    })(),
  );
});