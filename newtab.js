
var movieDiv = document.getElementById("movies");
// var bodyElement = document.getElementsByTagName("BODY")[0];

const Http = new XMLHttpRequest();
const url = "https://api.themoviedb.org/3/discover/movie?api_key=7edea214737972cb370a81f70ed88c1f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
Http.open("GET", url);
Http.send();
var movieData;
Http.onreadystatechange = (e) => {
    if(!movieData) {
        movieData = JSON.parse(Http.responseText);
        movieData = movieData.results.map(e => {
            return {
                ...e,
                preview_img: "https://image.tmdb.org/t/p/w185"+e.poster_path
            }
        });
        let backgroundUrl = null;
        movieData.map((e, i) => {
            let imgCard = document.createElement('div');
            imgCard.className = "imgDiv card";
            let tmdbLink = `https://www.themoviedb.org/movie/${e.id}`;
            if(i==movieData.length-1) backgroundUrl = e.preview_img;
            imgCard.innerHTML = `<div class='card-body'><a href='${tmdbLink}' target='blank'><img class="imgClass" src='${e.preview_img}'/></a></div>`;
            imgCard.innerHTML += `<div class='card-footer'><div class="movie-title"><a href='${tmdbLink}' target='blank'>${e.original_title}</a></div></div>`;
            movieDiv.appendChild(imgCard);
            
        });
        // bodyElement.style.backgroundImage = `url("${backgroundUrl}")`;
        // bodyElement.style.backgroundImage = `url('background.jpg')`;
        // document.body.style.backgroundImage = `url("${backgroundUrl}")`;
    }
    
};
