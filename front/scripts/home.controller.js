const { renderCards  } = require("./card.controller");
const {mostrarFormulario} = require("./form.controller")

const createHome = () => {
    const main = document.querySelector("[data-main]");
    main.innerHTML = "";
    const section = document.createElement("section");

    renderCards((cards) => {
        section.classList.add("container-home", "p-5");
        cards.forEach((cardHtml) => {
            section.insertAdjacentHTML("beforeend", cardHtml);
        });
        main.appendChild(section);
    });

    main.appendChild(section)

    return main;
}

const createStaticPage = (page) => {
    const main = document.querySelector("[data-main]")
    main.innerHTML = ""
    const section = document.createElement("section");

    let contenido;
    if (page === "movie") {
        contenido = `
            <h1 class="text-white">Movies</h1>
            <img src="./public/images/add.png" alt="add" id="img-add" />
        `
        section.classList.add("d-flex", "justify-content-center", "align-items-center");
    } else if (page === "about") { 
        contenido = `
        <h1 class="text-white">About Us</h1>
        <p class="text-white mb-0">Know e little more about us</p>
        `
        section.classList.add("container-about");
    }

    section.innerHTML = contenido
    main.appendChild(section);

    const btnImg = document.getElementById("img-add");
    //Pregunto si existe, si es true ejecuto
    if (btnImg) {
        btnImg.classList.add("hover-pointer");
        btnImg.addEventListener("click", () => mostrarFormulario());
    }

    return main;
}

module.exports = {
    createHome,
    createStaticPage,
}