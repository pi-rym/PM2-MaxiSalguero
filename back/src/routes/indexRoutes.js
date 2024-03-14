const { Router } = require('express')
const moviesRoute = require("./moviesRoute")
const welcomeRoute = require('./welcomeRoutes')
//const welcomeController = require("../controllers/welcomeController")
// const moviesController = require('../controllers/moviesController')

const router = Router()

router.use("/", welcomeRoute)
router.use("/movies", moviesRoute) 

//router.get("/", welcomeController) 
//router.get("/movies", moviesController)

module.exports = router