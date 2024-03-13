const axios = require("axios")

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

const getData = async () => {
    try {
      const response = await axios.get("https://students-api.up.railway.app/movies"); 
      return response.data
    } catch (error) {
      console.log(error.response.data);
    }
}

const renderCards = async (callback) => {
    try {
      const data = await getData()
      const cards = data.map((movie) => createCard(movie.poster, movie.title, movie.director));
      callback(cards);
    } catch (error) {
      console.log(error.response.data);
    }
}

module.exports = {
    renderCards,
    createCard,
} 