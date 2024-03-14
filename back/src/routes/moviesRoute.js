const { Router } = require("express")
const getMovies = require("../controllers/moviesController")

const moviesRoute = Router()

moviesRoute.get("/", getMovies)

module.exports = moviesRoute;