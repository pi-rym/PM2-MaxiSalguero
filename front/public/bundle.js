/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/card.controller.js":
/*!************************************!*\
  !*** ./scripts/card.controller.js ***!
  \************************************/
/***/ ((module) => {

eval("const createCard = (img, title, director) => {\r\n    const container = \r\n    `<div class=\"card\" style=\"width: 18rem;\">\r\n     <img src=\"${img}\" class=\"card-img-top\" alt=\"...\">\r\n     <div class=\"card-body\">\r\n        <h5 class=\"card-title\">${title}</h5>\r\n        <p class=\"card-text\">${director}</p>\r\n     </div>\r\n     </div>`\r\n\r\n     return container\r\n}\r\n\r\nconst renderCards = (callback) => {\r\n    $.get(\"https://students-api.2.us-1.fl0.io/movies\", (datos) => {\r\n        const cards = datos.map((movie) => createCard(movie.poster, movie.title, movie.director));\r\n        callback(cards);\r\n    })\r\n}\r\n\r\nmodule.exports = {\r\n    renderCards,\r\n    createCard\r\n}\n\n//# sourceURL=webpack://front/./scripts/card.controller.js?");

/***/ }),

/***/ "./scripts/home.controller.js":
/*!************************************!*\
  !*** ./scripts/home.controller.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { renderCards  } = __webpack_require__(/*! ./card.controller */ \"./scripts/card.controller.js\");\r\n\r\nconst createHome = () => {\r\n    const main = document.querySelector(\"[data-main]\");\r\n    main.innerHTML = \"\";\r\n    const section = document.createElement(\"section\");\r\n\r\n    renderCards((cards) => {\r\n        section.classList.add(\"container-home\", \"my-5\");\r\n        cards.forEach((cardHtml) => {\r\n            section.insertAdjacentHTML(\"beforeend\", cardHtml);\r\n        });\r\n        main.appendChild(section);\r\n    });\r\n\r\n    return main;\r\n}\r\n\r\nconst createStaticPage = (page) => {\r\n    const main = document.querySelector(\"[data-main]\")\r\n    main.innerHTML = \"\"\r\n    const section = document.createElement(\"section\");\r\n    let contenido, title, className;\r\n\r\n    if (page === \"movie\") { \r\n        title = \"Movies\";\r\n        className = \"container-movies\";\r\n\r\n    } else if (page === \"about\") { \r\n        title = \"About Us\";\r\n        className = \"container-about\";\r\n    }\r\n\r\n    contenido = `\r\n        <h1>${title}</h1>\r\n        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut in maxime libero illum eveniet a harum maiores soluta praesentium odio totam corporis atque exercitationem est officia, obcaecati rerum voluptates iste.</p>\r\n    `;\r\n    \r\n    section.classList.add(className);\r\n    section.innerHTML = contenido;\r\n    main.appendChild(section);\r\n    return main;\r\n}\r\n\r\nmodule.exports = {\r\n    createHome,\r\n    createStaticPage\r\n}\n\n//# sourceURL=webpack://front/./scripts/home.controller.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { createHome, createStaticPage } = __webpack_require__(/*! ./home.controller */ \"./scripts/home.controller.js\")\r\n\r\nconst btnHome = document.querySelector(\"[data-nav-home]\");\r\nconst btnAbout = document.querySelector(\"[data-nav-about]\");\r\nconst btnMovie = document.querySelector(\"[data-nav-movie]\");\r\n\r\nconst handlerClick = () => {\r\n    if (window.location.href === \"http://127.0.0.1:5501/front/index.html\" || window.location.href === \"http://127.0.0.1:5501/front/index.html#container-home\") {\r\n        //Nada\r\n    }\r\n    else createHome() \r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => createHome())\r\n\r\nbtnHome.addEventListener(\"click\", handlerClick)\r\n\r\nbtnAbout.addEventListener(\"click\", () => createStaticPage(\"about\"))\r\n\r\nbtnMovie.addEventListener(\"click\", () => createStaticPage(\"movie\"))\r\n\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;