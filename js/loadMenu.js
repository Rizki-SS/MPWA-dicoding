import loadPage from "./loadPage.js";

const init = () => {
    const elemsSideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elemsSideNav);
}

const loadMenu = () => {
    init();
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status != 200) return;
            document.querySelectorAll(".topnav, .sidenav")
                .forEach((elm) => {
                    elm.innerHTML = xhttp.responseText;
                });

            document.querySelectorAll(".sidenav a, .topnav a")
                .forEach((elm) => {
                    elm.addEventListener('click', (event) => {
                        const sidenav = document.querySelector('.sidenav');
                        M.Sidenav.getInstance(sidenav).close();

                        const page = event.target.getAttribute('href').substr(1);
                        loadPage(page);
                    });
                });
        }
    }
    xhttp.open("GET", 'nav.html', true);
    xhttp.send();
}

export default loadMenu;