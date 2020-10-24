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

export default init;