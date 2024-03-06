class Movie {
    constructor(id, title, year, director, duration, rate, poster){
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.rate = rate;
        this.poster = poster;
    }
}

class Repository {
    constructor() {
        this.movies = [];
        this.id = 0;
    }

    getAllMovies(){
        return this.movies;
    }

    createMovie(title, year, director, duration, rate, poster){
        this.id++;
        const movie = new Movie(this.id, title, year, director, duration, rate, poster);
        this.movies.push(movie);
    }

    deleteMovie(id){
        this.movies = this.movies.filter((movie) => movie.id !== id);
        return this.movies;
    }
}

const repository = new Repository()

const createMovieCard = (movie) => {
    const {title, year, director, duration , rate , poster} = movie

    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const p = document.createElement("p");

    div.classList.add("movie-container");
    h2.classList.add("movie-title");
    img.classList.add("movie-img");
    p.classList.add("movie-p");

    h2.innerHTML = `${title}`
    img.src = `${poster}`
    p.innerHTML = `${director}`

    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(p);

    return div
}

const appendMovieCard = () => {
    container = document.getElementById("container-top-movies");
    container.innerHTML = "";

    const movies = repository.getAllMovies()
    const moviesCard = movies.map( movie => createMovieCard(movie))
    moviesCard.forEach(card => container.appendChild(card))
}

const home = () => {
      $.get("https://students-api.2.us-1.fl0.io/movies", (datos) => {
        datos.map((movie) => repository.createMovie(movie.title, movie.year,movie.director, movie.duration, movie.rate, movie.poster))
        appendMovieCard();
      })
 }

document.addEventListener("DOMContentLoaded", home)











/* let i = 0
function createMovieCard(data){
    const { title, poster } = data; 
    const movieTitle = document.getElementsByClassName("movie-title")
    const moviePoster = document.getElementsByClassName("movie-poster")

    movieTitle[i].innerHTML = `${title}`
    moviePoster[i].src = `${poster}`
    i++;
}

function setDatesTemp(){
    tempData.map(data => createMovieCard(data))
}

setDatesTemp()  */
