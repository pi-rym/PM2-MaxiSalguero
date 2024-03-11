const createCard = (img, title, director) => {
    const container = 
    `<div class="card" style="width: 18rem;">
     <img src="${img}" class="card-img-top" alt="...">
     <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${director}</p>
     </div>
     </div>`

     return container
}

const renderCards = (callback) => {
    $.get("https://students-api.2.us-1.fl0.io/movies", (datos) => {
        const cards = datos.map((movie) => createCard(movie.poster, movie.title, movie.director));
        callback(cards);
    })
}

module.exports = {
    renderCards,
    createCard
}