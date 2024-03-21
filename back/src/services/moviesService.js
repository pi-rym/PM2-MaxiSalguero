const axios = require("axios")
const Movie = require("../models/Movie")

const getMoviesService = async () => {
    const movies = await Movie.find()  
    return movies
}

const createMovieService = async (title, year, director, duration, genre, rate, poster) => {
    try {
        const movie = await Movie.create({ title, year, director, duration, genre, rate, poster });
        return movie
    } catch (error) {
        console.error("Error al crear la película en el servicio:", error);
        throw error; // Lanza el error para que sea manejado en un nivel superior si la creación falla
    }
}

module.exports = {
    getMoviesService,
    createMovieService,
} 