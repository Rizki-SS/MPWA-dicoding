const CACHE_NAME = "premier-info-v1";

const url = [
    "/",
    "/sw.js"
]

self.addEventListener("install", () => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((caches) => {
            return caches.addAll(url);
        })
    )
})


self.addEventListener("fetch", () => {
    event.respondWith(
        caches.open(CACHE_NAME).then((caches) => {
            return caches.match(event.request).then((response) => {
                const fetchPromise = fetch(event.request).then((networkResponse) => {
                    caches.put(even.request, networkResponse.clone());
                    return networkResponse;
                })
                return response || fetchPromise;
            })
        })
    )
})