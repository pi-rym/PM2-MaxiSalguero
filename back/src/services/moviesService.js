const axios = require("axios")

//Crear una funcion con async, que retorne un array con las peliculas, haciendo peticion a la api
const getMoviesService = async () => {
    try {
      const response = await axios.get("https://students-api.up.railway.app/movies"); 
      return response.data; 
    } catch (error) {
      console.log(error.message);
    }
}

module.exports = {
    getMoviesService,
} 