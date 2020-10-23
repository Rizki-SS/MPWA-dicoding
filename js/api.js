const base = 'https://api.football-data.org/v2/'
const key = '214463ae22754f45992372dd64262ed1'

const api_header = {
    headers: {
        'X-Auth-Token': key,
    }
}

const getCompoetition = () => {
    fetch(base + 'competitions/2021/matches/?season=2020', api_header)
        .then(status)
        .then(res => res.json())
        .then(data => {
            let standingsHTML = ''
            data = data.matches;
            debugger;
            data.map((e) => {
                console.log(e);
            })
        })
        .catch(err => console.log(err))
}

const getTims = () => {
    fetch(base + 'competitions/2021/teams/', api_header)
        .then(status)
        .then(res => res.json())
        .then(data => {
            data = data.teams;
            data.map((e) => {
                console.log(e);
            })
        })
}

const getStandingsTotal = () => {
    fetch(base + 'competitions/2021/standings/', api_header)
        .then(res => res.json())
        .then(data => {
            data = data.standings[0].table;
            data.map((e) => {
                console.log(e);
            })
        })
}

export default getCompoetition;
export { getCompoetition, getStandingsTotal, getTims }