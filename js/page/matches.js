import { getCompoetition } from "../api.js";
import { saveMatchHandle } from "../saveHandle.js";
import { getById } from "../database/db.js";

const runMatches = async() => {
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
        "data": []
    }

    const matchAll = await getCompoetition();
    debugger;

    // saya menggunakan for karena berdasarkan refrensi internet foreach tidak lah support
    // https://itnext.io/why-async-await-in-a-foreach-is-not-working-5f13118f90d
    for (let i = 0; i < matchAll.length; i++) {
        const getLocalData = await getById('match', matchAll[i].id);

        let btnType;
        if (getLocalData == null) {
            btnType = `bookmark_border`
        } else {
            btnType = `bookmark`
        }

        list.data.push([
            matchAll[i].utcDate,
            matchAll[i].group,
            matchAll[i].status,
            matchAll[i].homeTeam.name,
            matchAll[i].score.winner,
            matchAll[i].awayTeam.name,
            btn(matchAll[i].id, btnType)
        ])
    }

    const dataTable = new simpleDatatables.DataTable("#tabel", {
        perPage: 40,
        data: list,
        perPageSelect: false,
    });

    saveMatchHandle(matchAll);
    dataTable.on('datatable.page', function(page) {
        saveMatchHandle(matchAll);
    });
}

const btn = (data, tipe) => {
    return `<button class="btn-floating btn-sm red save-match waves-effect waves-light" type="button" data-match=${data}>
            <i class="material-icons">${tipe}</i>
            </button>`
}

export default runMatches;