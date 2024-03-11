const { renderCards  } = require("./card.controller");

const createHome = () => {
    const main = document.querySelector("[data-main]");
    main.innerHTML = "";
    const section = document.createElement("section");

    renderCards((cards) => {
        section.classList.add("container-home", "my-5");
        cards.forEach((cardHtml) => {
            section.insertAdjacentHTML("beforeend", cardHtml);
        });
        main.appendChild(section);
    });

    return main;
}

const createStaticPage = (page) => {
    const main = document.querySelector("[data-main]")
    main.innerHTML = ""
    const section = document.createElement("section");
    let contenido, title, className;

    if (page === "movie") { 
        title = "Movies";
        className = "container-movies";

    } else if (page === "about") { 
        title = "About Us";
        className = "container-about";
    }

    contenido = `
        <h1>${title}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut in maxime libero illum eveniet a harum maiores soluta praesentium odio totam corporis atque exercitationem est officia, obcaecati rerum voluptates iste.</p>
    `;
    
    section.classList.add(className);
    section.innerHTML = contenido;
    main.appendChild(section);
    return main;
}

module.exports = {
    createHome,
    createStaticPage
}