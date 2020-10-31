import { getStandingsTotal } from "../api.js";
import { start, end } from "../spinner.js";

const runStanding = async() => {
    start();
    try {
        const data = await getStandingsTotal();
        let tabelData = ``;
        let getTop = true;
        data.forEach(e => {
            tabelData +=
                `<tr>
                        <td>${e.position}</td>
                        <td>${e.team.name}</td>
                        <td>${e.playedGames}</td>
                        <td class="text-color-3">${e.won}</td>
                        <td class="text-color-4">${e.draw}</td>
                        <td class="red-text">${e.lost}</td>
                        <td>${e.goalsFor}</td>
                        <td>${e.goalsAgainst}</td>
                        <td>${e.goalDifference}</td>
                        <td class="text-color-3">${e.points}</td>
                    </tr>`
            if (getTop) {
                addHeader(e)
                getTop = false;
            }
        });
        document.querySelector("#tabel-data").innerHTML = tabelData;
    } catch (error) {
        console.log(error);
    }
    end();
}

const addHeader = (data) => {
    document.querySelector("#logo-tim").innerHTML = `<img src="${data.team.crestUrl}" alt="${data.team.name}" srcset="" style="width: 100%;">`;
    document.querySelector("#tim-name").innerHTML = data.team.name;
    document.querySelector("#win").innerHTML = data.won;
    document.querySelector("#draw").innerHTML = data.draw;
    document.querySelector("#lose").innerHTML = data.lost;
}

export default runStanding;