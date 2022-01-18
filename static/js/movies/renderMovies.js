"use strict"

export default class Movie {
    constructor (data) {
        this.title = data.title;
        this.rating = data.rating;
        this.description = data.description;
        this.posterUrl = data.posterUrl;
        this.releaseDate = data.releaseDate; 
    }

    render() {
        const movieCard = document.createElement("li");
        movieCard.className = "movieCard-item";

        const poster = document.createElement("img");
        poster.className ="movieCard-poster";
        poster.src = this.posterUrl; 
        poster.alt = `Movie poster of ${this.title} `;
        movieCard.append(poster);
        

        this.movieCard = movieCard; 

        return movieCard; 

    }

}