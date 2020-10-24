import runStanding from "./page/standing.js";
import runTeams from "./page/teams.js";

const runScript = (page) => {
    switch (page) {
        case 'matches':
            // runStanding();
            break;
        case 'stading':
            runStanding();
            break;
        case 'tims':
            runTeams();
            break;
        default:
            break;
    }
}

export default runScript;