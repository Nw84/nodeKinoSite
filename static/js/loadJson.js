"use strict"

import Movie from "./movies/renderMovies.js";

export default class loadJsonData {
    async loadCurrentMovies() {
        const res = await fetch("./jsonData/currentMovies.json")
        const data = await res.json();
        return data.map(mv => new Movie(mv)); 
    }

    async loadUpcomingMovies() {
        const res = await fetch("./jsonData/upcomingMovies.json")
        const data = await res.json();
        return data.map(mv => new Movie(mv)); 
    }
}

