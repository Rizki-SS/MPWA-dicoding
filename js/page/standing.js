import { getStandingsTotal } from "../api.js";

const runStanding = () => {
    getStandingsTotal().then(data => {
        let tabelData =
            ``;
        let getTop = true;
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
            if (getTop) {
                document.getElementById("logo-tim").innerHTML = `<img src="${data.team.crestUrl}" alt="" srcset="" style="width: 100%;">`;
                document.getElementById("tim-name").innerHTML = data.team.name;
                document.getElementById("win").innerHTML = data.won;
                document.getElementById("draw").innerHTML = data.draw;
                document.getElementById("lose").innerHTML = data.lost;
                getTop = false;
            }
        });
        document.getElementById("tabel-data").innerHTML = tabelData;
    })
}

export default runStanding;