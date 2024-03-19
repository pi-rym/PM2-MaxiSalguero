//Se escribe con mayuscula por convencion el archivo

const { Schema, model } = require("mongoose")

const movieSchema = new Schema({
    title:{
        type: String,
        required:true,
        unique:true
    },
    year:Number,
    director:String,
    duration:String,
    genre:Array,
    rate:Number,
    poster:String
})

//Se pasa el parametro Movie con mayuscula porque Mongoose se encarga de crear esa collection en minuscula y plural
const Movie = model("Movie", movieSchema)

module.exports = Movie;