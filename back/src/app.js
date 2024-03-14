const express = require('express')
const router = require("./routes/indexRoutes")

const app = express()

app.use(router)

module.exports = app;