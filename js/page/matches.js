import { getCompoetition } from "../api.js";

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
            ],
            "data": []
        }

        data.forEach(data => {
            list.data.push([
                data.utcDate, data.group, data.status, data.homeTeam.name, data.score.winner, data.awayTeam.name
            ])
        });

        const dataTable = new DataTable("#tabel", {
            perPage: 40,
            data: list,
            perPageSelect: false,
        });
    })
}

export default runMatches;