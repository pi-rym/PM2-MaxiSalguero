const { Router } = require("express")
const welcomeController = require("../controllers/welcomeController")

const welcomeRoute = Router()

welcomeRoute.get("/", welcomeController)

module.exports = welcomeRoute;