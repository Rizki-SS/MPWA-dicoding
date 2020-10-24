import { getTims } from "../api.js";

const runTeams = () => {
    getTims().then((data) => {
        let cardList = '';
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
                        <button class="btn-floating btn-sm red">
                            <i class="material-icons">favorite_border</i>
                        </button>
                        <a href="${e.website}" target="blank" class="btn-floating btn-sm red">
                            <i class="material-icons">insert_link</i>
                        </a>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${e.name}<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            </div>
            `
        });

        document.getElementById('team-list').innerHTML = cardList;
    })
}

export default runTeams;