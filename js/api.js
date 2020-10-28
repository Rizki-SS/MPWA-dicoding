const base = 'https://api.football-data.org/v2/'
const key = '214463ae22754f45992372dd64262ed1'

const api_header = {
    headers: {
        'X-Auth-Token': key,
    }
}

const getCompoetition = () => {
    return fetch(base + 'competitions/2021/matches/?season=2020', api_header)
        .then(status)
        .then(res => res.json())
        .then(data => {
            data = data.matches;
            return data;
        })
        .catch(err => err)
}

const getTims = () => {
    return fetch(base + 'competitions/2021/teams/', api_header)
        .then(status)
        .then(res => res.json())
        .then(data => {
            data = data.teams;
            return data;
        }).catch(err => err)
}

const getStandingsTotal = () => {
    return fetch(base + 'competitions/2021/standings/', api_header)
        .then(res => res.json())
        .then(data => {
            data = data.standings[0].table;
            return data;
        })
        .catch(err => err)
}

export default getCompoetition;
export { getCompoetition, getStandingsTotal, getTims }