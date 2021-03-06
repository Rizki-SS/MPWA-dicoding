const dbPromised = idb.open("premire-info", 1, function(upgradeDb) {
    const timObjectStore = upgradeDb.createObjectStore("tims", {
        keyPath: "id"
    });
    timObjectStore.createIndex("name", "name", { unique: false });

    const matchObjectStore = upgradeDb.createObjectStore("match", {
        keyPath: "id"
    });

});

const saveData = (tabel, obj) => {
    dbPromised
        .then((db) => {
            const tx = db.transaction(tabel, "readwrite");
            const store = tx.objectStore(tabel);
            store.add(obj);
            return tx.complete;
        })
}

const getAll = (tabel) => {
    return new Promise((resolve, reject) => {
        dbPromised
            .then((db) => {
                const tx = db.transaction(tabel, "readonly");
                const store = tx.objectStore(tabel);
                return store.getAll();
            })
            .then((tims) => {
                resolve(tims);
            })
    })
}

const getById = (tabel, id) => {
    return new Promise((resolve, reject) => {
        dbPromised
            .then((db) => {
                const tx = db.transaction(tabel, "readonly");
                const store = tx.objectStore(tabel);
                return store.get(id);
            })
            .then((tims) => {
                resolve(tims);
            })
    })
}

const deleteData = (tabel, id) => {
    dbPromised
        .then((db) => {
            const tx = db.transaction(tabel, "readwrite");
            const store = tx.objectStore(tabel);
            store.delete(id);
            return tx.complete;
        })
}

const test = () => {
    if (dbPromised) {
        console.log(true);
    }
}

export default test;
export { getAll, getById, saveData, deleteData }