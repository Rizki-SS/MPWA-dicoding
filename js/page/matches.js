import { getCompoetition } from "../api.js";
import { saveMatchHandle } from "../saveHandle.js";

async function runMatches() {
    getCompoetition().then((data) => {
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

        data.forEach(data => {
            list.data.push([
                data.utcDate, data.group, data.status, data.homeTeam.name, data.score.winner, data.awayTeam.name, btn(data.id)

            ])
        });

        const dataTable = new simpleDatatables.DataTable("#tabel", {
            perPage: 40,
            data: list,
            perPageSelect: false,
        });

        saveMatchHandle(data);
        dataTable.on('datatable.page', function(page) {
            saveMatchHandle(data);
        });
    })
}

const btn = (data) => {
    return `<button class="btn-floating btn-sm red save-match waves-effect waves-light" type="button" data-match=${data}>
            <i class="material-icons">bookmark_border</i>
            </button>`
}

export default runMatches;