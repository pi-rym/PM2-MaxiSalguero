let i = 0
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

setDatesTemp() 
