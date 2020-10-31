import { getAll } from "../database/db.js";
import btnFavHandle, { saveMatchHandle } from "../saveHandle.js";
import { start, end } from "../spinner.js";

const runSaved = () => {
    getAllTeam();
    getAllMatch();
}

const getAllMatch = async() => {
    start();
    try {
        const list = {
            "headings": [
                "Date",
                "Status",
                "Group.",
                "Home Team",
                "Winner",
                "Away Team",
                "#",
            ],
            "data": [],
        }

        const data = await getAll("match");
        data.forEach(data => {
            list.data.push([
                data.utcDate,
                data.status,
                data.group,
                data.homeTeam.name,
                data.score.winner,
                data.awayTeam.name,
                btn(data.id)
            ])
        });

        const dataTable = new simpleDatatables.DataTable("#tabel", {
            perPage: 10,
            data: list,
            perPageSelect: false,
        });

        saveMatchHandle(data);
        dataTable.on('datatable.page', function(page) {
            saveMatchHandle(data);
        });
        dataTable.on('datatable.sort', function(column, direction) {
            saveMatchHandle(data);
        });
        dataTable.on('datatable.search', function(query, matched) {
            saveMatchHandle(data);
        });
    } catch (error) {
        console.log(error);
    }
    end();
}

const btn = (data) => {
    return `<button class="btn btn-floating btn-sm save-match waves-effect waves-light" type="button" data-match=${data}>
            <i class="material-icons">bookmark</i>
            </button>`
}

const getAllTeam = () => {
    getAll("tims").then((data) => {
        let cardList = '';
        // debugger;
        data.forEach(e => {
            e.crestUrl = e.crestUrl.replace(/^http:\/\//i, 'https://')
            cardList += `
            <div class="col s12 m6 l4">
                <div class="card medium sticky-action">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${e.crestUrl}" alt="${e.name}>
                    </div>
                    <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">${e.name}<i class="material-icons right">more_vert</i></span>
                    </div>
                    <div class="card-action">
                        <button class="btn btn-floating btn-sm btn-fav" data-tim=${e.id}>
                            <i class="material-icons">favorite</i>
                        </button>
                        <a href="${e.website}" target="blank" class="btn btn-floating btn-sm">
                            <i class="material-icons">insert_link</i>
                        </a>
                    </div>
                    <div class="card-reveal">
                        ${detail(e)}
                    </div>
                </div>
            </div>`
        });

        document.querySelector('#team-list').innerHTML = cardList;


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



export default runSaved;