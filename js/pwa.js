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

            navigator.serviceWorker.getRegistration().then((reg) => {
                reg.showNotification('Notifikasi di Ijinkan');
            })
        })
    }
}

export default init;
export { init, notification };