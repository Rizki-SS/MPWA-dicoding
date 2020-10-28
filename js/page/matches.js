import { getCompoetition } from "../api.js";
import { saveMatchHandle } from "../saveHandle.js";
import { getById } from "../database/db.js";
import { start, end } from "../spinner.js";

const runMatches = async() => {
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
        const matchAll = await getCompoetition();
        for (let i = 0; i < matchAll.length; i++) {
            const getLocalData = await getById('match', matchAll[i].id);

            list.data.push([
                matchAll[i].utcDate,
                matchAll[i].group,
                matchAll[i].status,
                matchAll[i].homeTeam.name,
                matchAll[i].score.winner,
                matchAll[i].awayTeam.name,
                btn(matchAll[i].id, (getLocalData == null))
            ])
        }

        const dataTable = new simpleDatatables.DataTable("#tabel", {
            perPage: 25,
            data: list,
            perPageSelect: false,
        });
        saveMatchHandle(matchAll);
        //seting button di data table
        dataTable.on('datatable.page', function(page) {
            saveMatchHandle(matchAll);
        });
        dataTable.on('datatable.sort', function(column, direction) {
            saveMatchHandle(matchAll);
        });
        dataTable.on('datatable.search', function(query, matched) {
            saveMatchHandle(matchAll);
        });

    } catch (error) {
        console.log(error);
    }

    end();
}

const btn = (data, booleantipe) => {
        return `<button class="btn btn-floating btn-sm save-match waves-effect waves-light" type="button" data-match=${data}>
            <i class="material-icons">${(booleantipe)?`bookmark_border`:`bookmark`}</i>
            </button>`
}

export default runMatches;