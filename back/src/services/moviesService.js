const axios = require("axios")

class Movie {
    constructor(title, poster ,director){
        if ([title, poster, director].some(prop => !prop)) throw new Error("Faltan datos");
      
        this.title = title,
        this.poster = poster,
        this.director = director
    }
}

//Crear una funcion con async, que retorne un array con las peliculas, haciendo peticion a la api
const getMoviesService = async () => {
    try {
      const response = await axios.get("https://students-api.up.railway.app/movies"); 
      const movies = [] 
      response.data.forEach((movie) => { 
        movies.push(new Movie(movie.title, movie.poster, movie.director));
      })
      return movies
      //return response.data; 
    } catch (error) {
      console.log(error.message);
    }
}

module.exports = {
    getMoviesService,
} 