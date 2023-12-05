const staticCacheName = 'app-v1'

const assetUrls = [
    "/index.html", 
    "art.js", 
    "/pray/css/art.css",
]

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(assetUrls)
})
