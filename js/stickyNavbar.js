const navSticy = (nav) => {
    var scrolled = document.scrollingElement.scrollTop;
    if (scrolled < 15) {
        nav.classList.add("transparent");
        nav.classList.add("z-depth-0")
        nav.classList.remove("bg-color-2");
    } else {
        nav.classList.remove("transparent");
        nav.classList.remove("z-depth-0")
        nav.classList.add("bg-color-2");
    }
}

export const init = () => {
    document.addEventListener("scroll", () => {
        const nav = document.querySelector('nav');
        navSticy(nav);
    })
}