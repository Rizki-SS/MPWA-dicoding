import runStanding from "./page/standing.js";
import runTeams from "./page/teams.js";
import runMatches from "./page/matches.js";
import runSaved from "./page/saved.js";

const runScript = (page) => {
    switch (page) {
        case 'matches':
            runMatches();
            break;
        case 'stading':
            runStanding();
            break;
        case 'tims':
            runTeams();
            break;
        case 'saved':
            runSaved();
            break;
        default:
            break;
    }
}

export default runScript;