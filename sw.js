const CACHE_NAME = "premier-info-v1";

const url = [
    "/",
    "/sw.js"
]

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((caches) => {
            return caches.addAll(url);
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request, { cacheName: CACHE_NAME })
        .then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request)
        })
    )
})

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
        .then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName != CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})