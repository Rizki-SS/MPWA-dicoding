import { saveData, getById, deleteData } from "./database/db.js";

const btnFavHandle = (data) => {
    const btnFav = document.querySelectorAll(".btn-fav")

    for (let i = 0; i < btnFav.length; i++) {
        btnFav[i].onclick = () => {
            const a = data.filter((data) => {
                return data.id == btnFav[i].dataset.tim;
            })

            getById("tims", parseInt(btnFav[i].dataset.tim)).then((data) => {
                if (data == null) {
                    saveData("tims", a[0])
                    btnFav[i].innerHTML = `<i class="material-icons">favorite</i>`
                    M.toast({ html: 'data team di simpan' })
                } else {
                    deleteData("tims", parseInt(btnFav[i].dataset.tim))
                    btnFav[i].innerHTML = `<i class="material-icons">favorite_border</i>`
                    M.toast({ html: 'data team di hapus' })
                }
            })
        }
    }
}

const saveMatchHandle = (data) => {
    const btnSave = document.querySelectorAll(".save-match")

    for (let i = 0; i < btnSave.length; i++) {
        btnSave[i].onclick = () => {
            const a = data.filter((data) => {
                return data.id == btnSave[i].dataset.match;
            })
            getById("match", parseInt(btnSave[i].dataset.match)).then((data) => {
                if (data == null) {
                    saveData("match", a[0])
                    btnSave[i].innerHTML = `<i class="material-icons">bookmark</i>`
                    M.toast({ html: 'data pertandingan di simpan' })
                } else {
                    deleteData("match", parseInt(btnSave[i].dataset.match))
                    btnSave[i].innerHTML = `<i class="material-icons">bookmark_border</i>`
                    M.toast({ html: 'data pertandingan di hapus' })
                }
            })
        }
    }
}

export default btnFavHandle;
export { saveMatchHandle, btnFavHandle }