import express from "express";
import expressLayouts from "express-ejs-layouts";

import { loadMovie, loadMovies } from "./static/js/loadApiData.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

//I had to add this because the __dirname threw an error message that it was not defined
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const app = express();

const port = 5080; 

app.set("view engine", "ejs");
app.set("views", "./static/views")
app.use(expressLayouts)
app.set("layout", "./layouts/main-layout")

app.use(express.static(__dirname + "/static")); 

app.listen(port);

app.get("/", async (req, res) => {
    res.render("index"); 
}); 

app.get("/movies", async (req, res) => {
    const movies = await loadMovies();
    res.render("moviepage", { movies, layout: "./layouts/movie-layout"}); 
})

app.get("/movies/:movieId", async (req, res) => {
    const movie = await loadMovie(req.params.movieId);
    if (movie) {
      res.render("movie", { movie, layout: "./layouts/movie-layout"});
    } else {
      res.status(404).render("404page");
    }
  });

app.get(["/aboutus", "/aboutus/history"], (req, res) => {
    res.render("aboutus-history", {layout: "./layouts/aboutus-layout"} )
});

app.get("/aboutus/faq", (req, res) => {
  res.render("aboutus-faq", {layout: "./layouts/aboutus-layout"} )
});

app.get("/aboutus/accessibility", (req, res) => {
  res.render("aboutus-accessibility", {layout: "./layouts/aboutus-layout"} )
});

app.get("/aboutus/policy", (req, res) => {
  res.render("aboutus-policy", {layout: "./layouts/aboutus-layout"} )
});

app.use((req, res) => {
    res.status(404).render("404page");
});