import { getTims } from "../api.js";
import btnFavHandle from "../saveHandle.js";
import { getById } from "../database/db.js";

const runTeams = async() => {
        const data = await getTims();
        let cardList = '';
        let logoTimList = '';

        for (let i = 0; i < data.length; i++) {
            data[i].crestUrl = data[i].crestUrl.replace(/^http:\/\//i, 'https://')
            let btnType;
            const dataLocal = await getById("tims", data[i].id);
            console.log(dataLocal);
            cardList += `
            <div class="col s12 m6 l4">
                <div class="card medium sticky-action">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${data[i].crestUrl}" style=" max-height: 240px">
                    </div>
                    <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">${data[i].name}<i class="material-icons right">more_vert</i></span>
                    </div>
                    <div class="card-action">
                        <button class="btn-floating btn-sm red btn-fav" data-tim=${data[i].id}>
                            ${(dataLocal == null)?`<i class="material-icons">favorite_border</i>`:`<i class="material-icons">favorite</i>`}
                        </button>
                        <a href="${data[i].website}" target="blank" class="btn-floating btn-sm red">
                            <i class="material-icons">insert_link</i>
                        </a>
                    </div>
                    <div class="card-reveal">
                        ${detail(data[i])}
                    </div>
                </div>
            </div>`
        logoTimList += `<a class="carousel-item"><img src="${data[i].crestUrl}"></a>`;
    }

    document.querySelector('#team-list').innerHTML = cardList;
    document.querySelector('#logo-tim').innerHTML = logoTimList;

    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
    btnFavHandle(data);
}

const detail = (data) => {
    return `
        <span class="card-title grey-text text-darken-4">${data.name}<i class="material-icons right">close</i></span>
        <table>
            <tr>
                <td>address</td>
                <td>${data.address}</td>
            </tr>
            <tr>
                <td>phone</td>
                <td>${data.phone}</td>
            </tr>
            <tr>
                <td>website</td>
                <td><a href="${data.website}">${data.website}</a></td>
            </tr>
            <tr>
                <td>email</td>
                <td>${data.email}</td>
            </tr>
            <tr>
                <td>founded</td>
                <td>${data.founded}</td>
            </tr>
        </table>
    `
}



export default runTeams;