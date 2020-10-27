import urlBase64ToUint8Array from "./uArray.js";

const init = () => {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("./sw.js")
                .then(() => {
                    console.log("ServiceWorker berhasil di daftarkan");
                })
                .catch((e) => {
                    console.log("Sericeworker gagal di daftarkan");
                    console.log(e);
                })
        })
    } else {
        console.log("Browser Not Support");
    }
}

const notification = () => {
    if ('Notification' in window) {
        Notification.requestPermission().then((result) => {
            if (result === 'denied') {
                console.log('Notifikasi tidak di ijinkan');
                return;
            } else if (result === 'default') {
                console.log("Pengguna menutup kotak dialog permintaan ijin.");
                return;
            }

            if (('PushManager' in window)) {
                navigator.serviceWorker.getRegistration().then(function(registration) {
                    registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: urlBase64ToUint8Array("BKtoemyR9_-oLdePbbvIrLRP5ariHo0FW9NUtrr5AACz7Ubq4bLuupCj9RlBJOuihQJP3kDOb7ajGJlorKQOD7c")
                    }).then(function(subscribe) {
                        console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint);
                        console.log('Berhasil melakukan subscribe dengan p256dh key: ', btoa(String.fromCharCode.apply(
                            null, new Uint8Array(subscribe.getKey('p256dh')))));
                        console.log('Berhasil melakukan subscribe dengan auth key: ', btoa(String.fromCharCode.apply(
                            null, new Uint8Array(subscribe.getKey('auth')))));
                    }).catch(function(e) {
                        console.error('Tidak dapat melakukan subscribe ', e.message);
                    });
                });
            }
        })
    }
}


export default init;
export { init, notification };