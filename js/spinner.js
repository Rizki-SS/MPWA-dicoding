let spinner;

const init = (e) => {
    spinner = document.querySelector(e)
}

const start = () => {
    spinner.style.visibility = 'visible';
}

const end = () => {
    spinner.style.visibility = 'hidden';
}

export default init;
export { init, start, end };