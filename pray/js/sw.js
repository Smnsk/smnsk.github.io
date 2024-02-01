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
  console.log("activate SW",)
})

self.addEventListener('fetch', event => {
console.log("Fetch working")
});