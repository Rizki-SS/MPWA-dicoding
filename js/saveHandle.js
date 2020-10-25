import { saveTims, getById, deleteTims } from "./database/db.js";

const isSaved = async(id) => {
    const saved = await getById(id).then((data) => {
        if (data == null) {
            return false;
        } else {
            return true;
        }
    })
    return saved;
}

const btnFavHandle = (data) => {
    const btnFav = document.querySelectorAll(".btn-fav")

    for (let i = 0; i < btnFav.length; i++) {
        btnFav[i].onclick = () => {
            const a = data.filter((data) => {
                return data.id == btnFav[i].dataset.tim;
            })

            getById(parseInt(btnFav[i].dataset.tim)).then((data) => {
                if (data == null) {
                    saveTims(a[0])
                    btnFav[i].innerHTML = `<i class="material-icons">favorite</i>`
                } else {
                    deleteTims(parseInt(btnFav[i].dataset.tim))
                    btnFav[i].innerHTML = `<i class="material-icons">favorite_border</i>`
                }
            })
        }
    }
}

export default isSaved;
export { btnFavHandle, isSaved }