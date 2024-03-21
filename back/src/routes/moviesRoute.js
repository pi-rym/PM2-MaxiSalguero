const { Router } = require("express")
const { getMovies, createMovie } = require("../controllers/moviesController")

const moviesRoute = Router()

moviesRoute.get("/", getMovies)

moviesRoute.post("/", createMovie)

module.exports = moviesRoute;