const { getMoviesService, createMovieService } = require("../services/moviesService")

const getMovies = async (req, res) => {
    try {
        const movies = await getMoviesService()
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const createMovie = async (req, res) => {
    const {title, year, director, duration, genre, rate, poster} = req.body;
    try {
        const nuevaPelicula = await createMovieService(title, year, director, duration, genre, rate, poster);
        res.status(201).json(nuevaPelicula);
    } catch (error) {
        console.error("Error al crear la película:", error);
        res.status(500).json({ message: "Error al crear la película" });
    }
}

module.exports =  {
    getMovies,
    createMovie,
}