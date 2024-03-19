require('dotenv').config()
const { connect } = require('mongoose')

const URI = process.env.URI

const dbConnection = async () => {
    await connect(URI)
}

module.exports = dbConnection