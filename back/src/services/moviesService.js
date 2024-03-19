const axios = require("axios")
const Movie = require("../models/Movie")

const getMoviesService = async () => {

    const movies = await Movie.find()  

    return movies
}

module.exports = {
    getMoviesService,
} 