"use strict"

import loadJsonData from "../loadJson.js";

(async () => {
    const jData = new loadJsonData();
            
    const current = await jData.loadCurrentMovies(); 
    current.slice(2, 5).forEach(Movie => 
        document.querySelector(".current-movieList").append(Movie.render())); 

    const upcoming = await jData.loadUpcomingMovies();
    upcoming.slice(2, 5).forEach(Movie =>   
        document.querySelector(".upcoming-movieList").append(Movie.render())); 

    //popular movies will be sorted depending on rating later with a rating filter, but we will show three random movies for now. 
    current.slice(0, 3).forEach(Movie =>   
            document.querySelector(".popular-movieList").append(Movie.render())); 
      
  })(); 




    