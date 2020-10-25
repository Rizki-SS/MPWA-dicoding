import { getTims } from "../api.js";
import btnFavHandle from "../saveHandle.js";

const runTeams = () => {
    getTims().then((data) => {
        let cardList = '';
        let logoTimList = '';
        data.forEach(e => {
            e.crestUrl = e.crestUrl.replace(/^http:\/\//i, 'https://')
            cardList += `
            <div class="col s12 m6 l4">
                <div class="card medium sticky-action">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${e.crestUrl}" style=" max-height: 240px">
                    </div>
                    <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">${e.name}<i class="material-icons right">more_vert</i></span>
                    </div>
                    <div class="card-action">
                        <button class="btn-floating btn-sm red btn-fav" data-tim=${e.id}>
                            <i class="material-icons">favorite_border</i>
                        </button>
                        <a href="${e.website}" target="blank" class="btn-floating btn-sm red">
                            <i class="material-icons">insert_link</i>
                        </a>
                    </div>
                    <div class="card-reveal">
                        ${detail(e)}
                    </div>
                </div>
            </div>`
            logoTimList += `<a class="carousel-item"><img src="${e.crestUrl}"></a>`;
        });

        document.querySelector('#team-list').innerHTML = cardList;
        document.querySelector('#logo-tim').innerHTML = logoTimList;


        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems);
        btnFavHandle(data);
    })
}

const detail = (e) => {
    return `
        <span class="card-title grey-text text-darken-4">${e.name}<i class="material-icons right">close</i></span>
        <table>
            <tr>
                <td>address</td>
                <td>${e.address}</td>
            </tr>
            <tr>
                <td>phone</td>
                <td>${e.phone}</td>
            </tr>
            <tr>
                <td>website</td>
                <td><a href="${e.website}">${e.website}</a></td>
            </tr>
            <tr>
                <td>email</td>
                <td>${e.email}</td>
            </tr>
            <tr>
                <td>founded</td>
                <td>${e.founded}</td>
            </tr>
        </table>
    `
}



export default runTeams;