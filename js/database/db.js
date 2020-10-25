const dbPromised = idb.open("premire-info", 1, function(upgradeDb) {
    const articlesObjectStore = upgradeDb.createObjectStore("tims", {
        keyPath: "id"
    });
    articlesObjectStore.createIndex("name", "name", { unique: false });
});

const saveTims = (tim) => {
    dbPromised
        .then((db) => {
            const tx = db.transaction("tims", "readwrite");
            const store = tx.objectStore("tims");
            store.add(tim);
            return tx.complete;
        })
        .then(() => {
            console.log("Berhasil di simpan");
        })
}

const getAll = () => {
    return new Promise((resolve, reject) => {
        dbPromised
            .then((db) => {
                const tx = db.transaction("tims", "readonly");
                const store = tx.objectStore("tims");
                return store.getAll();
            })
            .then((tims) => {
                resolve(tims);
            })
    })
}

const getById = (id) => {
    return new Promise((resolve, reject) => {
        dbPromised
            .then((db) => {
                const tx = db.transaction("tims", "readonly");
                const store = tx.objectStore("tims");
                return store.get(id);
            })
            .then((tims) => {
                resolve(tims);
            })
    })
}

const deleteTims = (id) => {
    console.log(id);
    dbPromised
        .then((db) => {
            const tx = db.transaction("tims", "readwrite");
            const store = tx.objectStore("tims");
            store.delete(id);
            return tx.complete;
        })
        .then(() => {
            console.log("item deleted");
        })
}

const test = () => {
    if (dbPromised) {
        console.log(true);
    }
}

export default test;
export { getAll, getById, saveTims, deleteTims }