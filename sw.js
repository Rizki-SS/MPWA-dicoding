    importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');


    // check workbox
    if (workbox) {
        console.log('Workbox berhasil di muat');
    } else {
        console.log('gagal memuat workbox');
    }
    // workbox.setConfig({
    //     debug: true
    // });

    // install
    workbox.precaching.precacheAndRoute([
        { url: './index.html', revision: '1' },
        { url: './page/matches/index.html', revision: '1' },
        { url: './page/matches/header.html', revision: '1' },
        { url: './js/page/matches.html', revision: '1' },
        { url: './page/saved/index.html', revision: '1' },
        { url: './page/saved/header.html', revision: '1' },
        { url: './page/teams/index.html', revision: '1' },
        { url: './page/teams/header.html', revision: '1' },
        { url: './page/standing/index.html', revision: '1' },
        { url: './page/standing/header.html', revision: '1' },
        { url: './nav.html', revision: '1' },
        { url: './css/materialize.min.css', revision: '1' },
        { url: './css/stye.css', revision: '1' },
        { url: './js/materialize.min.js', revision: '1' },
        { url: './js/api.js', revision: '1' },
        { url: './js/loadMenu.js', revision: '1' },
        { url: './js/loadPage.js', revision: '1' },
        { url: './js/pwa.js', revision: '1' },
        { url: './js/runScript.js', revision: '1' },
        { url: './js/saveHandle.js', revision: '1' },
        { url: './js/script.js', revision: '1' },
        { url: './js/simple-datatables@latest.js', revision: '1' },
        { url: './js/spinner.js', revision: '1' },
        { url: './js/stickyNavbar.js', revision: '1' },
        { url: './js/uArray.js', revision: '1' },
        { url: './js/database/db.js', revision: '1' },
        { url: './js/database/idb.js', revision: '1' },
        { url: './js/page/matches.js', revision: '1' },
        { url: './js/page/saved.js', revision: '1' },
        { url: './js/page/teams.js', revision: '1' },
        { url: './js/page/standing.js', revision: '1' },
    ]);

    // register local image
    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg)$/,
        workbox.strategies.cacheFirst({
            cacheName: 'images',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 10,
                    maxAgeSeconds: 7 * 24 * 60 * 60, // 30 hari
                }),
            ],
        }),
    );

    // register global iamge
    workbox.routing.registerRoute(
        ({ event }) => event.request.destination === 'image',
        workbox.strategies.cacheFirst({
            cacheName: 'images-outers',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 25,
                    maxAgeSeconds: 2 * 24 * 60 * 60, // 30 hari
                }),
            ],
        }),
    );

    // register api route
    workbox.routing.registerRoute(
        /^https:\/\/api\.football-data\.org/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'football-data',
        })
    );

    //
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