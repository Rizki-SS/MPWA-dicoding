import { getStandingsTotal } from "../api.js";

const runStanding = () => {
    getStandingsTotal().then(data => {
        let tabelData =
            ``;
        data.forEach(data => {
            tabelData +=
                `<tr>
                        <td>${data.position}</td>
                        <td>${data.team.name}</td>
                        <td>${data.playedGames}</td>
                        <td>${data.won}</td>
                        <td>${data.draw}</td>
                        <td>${data.lost}</td>
                        <td>${data.goalsFor}</td>
                        <td>${data.goalsAgainst}</td>
                        <td>${data.goalDifference}</td>
                        <td>${data.points}</td>
                    </tr>`
        });
        document.getElementById("tabel-data").innerHTML = tabelData;

        // const dataTable = new DataTable("#tabel");
    })
}

export default runStanding;