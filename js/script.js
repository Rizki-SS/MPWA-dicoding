import loadMenu from "./loadMenu.js";
import { init as laodPage } from "./loadPage.js";
import { init as stickyNavbar } from "./stickyNavbar.js";
import init from "./pwa.js";
import db, { saveTims, deleteTims, getAll, getById } from "./database/db.js";

import { getTims } from "./api.js";


getTims().then((data) => {
    // console.log(data[1]);
    // saveTims(data[1]);
    // getAll().then((data) => {
    //     data.forEach(e => {
    //         console.log(e);
    //     });
    // })
    getById(1).then((data) => {
        console.log(data);
    })
})

init();
loadMenu();
laodPage();
stickyNavbar();

const elems = document.querySelectorAll('.parallax');
const instances = M.Parallax.init(elems);