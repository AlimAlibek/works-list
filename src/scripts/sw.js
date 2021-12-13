const staticCacheName = 'st_cache_v1'

const baseAssets = [
    './',
    './index.html',
    './main.js',
    './main.css',
]

self.addEventListener('install', async () => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll(baseAssets);
})



self.addEventListener('fetch', async event => {
    event.respondWith(
        caches.match(event.request).then(res => {
            if (res) {
                return res
            }
            return fetch(event.request);
        })
    );
    
})
