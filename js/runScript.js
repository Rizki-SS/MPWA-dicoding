import runStanding from "./page/standing.js";

const runScript = (page) => {
    switch (page) {
        case 'matches':
            runStanding();
            break;
        case 'standing':
            runStanding();
            break;
        default:
            break;
    }
}

export default runScript;