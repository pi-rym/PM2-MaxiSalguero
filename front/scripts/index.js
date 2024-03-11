const { createHome, createStaticPage } = require('./home.controller')

const btnHome = document.querySelector("[data-nav-home]");
const btnAbout = document.querySelector("[data-nav-about]");
const btnMovie = document.querySelector("[data-nav-movie]");

const handlerClick = () => {
    if (window.location.href === "http://127.0.0.1:5501/front/index.html" || window.location.href === "http://127.0.0.1:5501/front/index.html#container-home") {
        //Nada
    }
    else createHome() 
}

document.addEventListener("DOMContentLoaded", () => createHome())

btnHome.addEventListener("click", handlerClick)

btnAbout.addEventListener("click", () => createStaticPage("about"))

btnMovie.addEventListener("click", () => createStaticPage("movie"))

