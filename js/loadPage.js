import { run } from "./page/matches.js";

const init = () => {
    let page = window.location.hash.substr(1);
    if (page === "") page = 'matches';
    loadPage(page);
}

const loadPage = (page) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        const content = document.querySelector('#body-content');
        if (this.readyState === 4) {
            if (this.status === 200) {
                content.innerHTML = xhttp.responseText;
                // var dataTable = new DataTable("#tabel", {
                //     data: {}
                // });
                run();
                loadPageHeader(page);
            } else if (this.status === 404) {
                pageNotFound();
            } else {
                content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
            }
        }
    };
    xhttp.open("GET", 'page/' + page + '/index.html', true);
    xhttp.send();
}

const loadPageHeader = (page) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            const content = document.querySelector('.header');
            if (this.status === 200) {
                content.innerHTML = xhttp.responseText;
            }
        }
    };
    xhttp.open("GET", 'page/' + page + '/header.html', true);
    xhttp.send();
}

const pageNotFound = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            const content = document.querySelector('#body-content');
            const head = document.querySelector('.header');
            if (this.status === 200) {
                content.innerHTML = xhttp.responseText;
                head.innerHTML = '<h1 class="white-text">404 <br> - Halama tidak di temukan</h1>'
            }
        }
    };
    xhttp.open("GET", 'page/404.html', true);
    xhttp.send();
}

export default init;
export { init, loadPage, loadPageHeader }