const { Router } = require('express')
const getMovies = require('../controllers/moviesController')
const getGreeting = require("../controllers/welcomeController")

const router = Router()

router.get("/", getGreeting)

router.use("/movies", getMovies)

module.exports = router