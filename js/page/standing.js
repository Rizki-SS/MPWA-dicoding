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
                addHeader(data)
                getTop = false;
            }
        });
        document.querySelector("#tabel-data").innerHTML = tabelData;
    })
}

const addHeader = (data) => {
    document.querySelector("#logo-tim").innerHTML = `<img src="${data.team.crestUrl}" alt="" srcset="" style="width: 100%;">`;
    document.querySelector("#tim-name").innerHTML = data.team.name;
    document.querySelector("#win").innerHTML = data.won;
    document.querySelector("#draw").innerHTML = data.draw;
    document.querySelector("#lose").innerHTML = data.lost;
}

export default runStanding;