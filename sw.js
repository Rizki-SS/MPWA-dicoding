const CACHE_NAME = "premier-info-v2";

const url = [
    "/",
    "/nav.html",
    "/sw.js",
    "/manifest.json",
    "/page/matches/index.html",
    "/page/matches/header.html",
    "/page/saved/index.html",
    "/page/saved/header.html",
    "/page/stading/index.html",
    "/page/stading/header.html",
    "/page/tims/index.html",
    "/page/tims/header.html",
    "/js/api.js",
    "/js/loadMenu.js",
    "/js/loadPage.js",
    "/js/materialize.min.js",
    "/js/pwa.js",
    "/js/runScript.js",
    "/js/saveHandle.js",
    "/js/script.js",
    "/js/simple-datatables@latest.js",
    "/js/stickyNavbar.js",
    "/js/uArray.js",
    "/js/database/db.js",
    "/js/database/idb.js",
    "/js/page/matches.js",
    "/js/page/saved.js",
    "/js/page/standing.js",
    "/js/page/teams.js",
    "/css/icon.css",
    "/css/materialize.min.css",
    "/css/stye.css",
    "/asset/Image.jpg",
    "/asset/Image 1.png",
    "/asset/logo-w.png",
    "/asset/icon/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
    "/asset/icon/icon.png",
    "/asset/icon/icon-192x192.png",
    "/asset/icon/icon-512x512.png",
    "/asset/icon/maskable_icon.png",
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

self.addEventListener("push", (event) => {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = "Push Message no payload";
    }

    const options = {
        body: body,
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            icon: './asset/icon/icon-192x192.png',
            primaryKey: 1
        }
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    )
})