import loadMenu from "./loadMenu.js";
import { init as laodPage } from "./loadPage.js";
import { init as stickyNavbar } from "./stickyNavbar.js";
import init from "./pwa.js";

init();
loadMenu();
laodPage();
stickyNavbar();

const elems = document.querySelectorAll('.parallax');
const instances = M.Parallax.init(elems);