import request from "supertest"; 

import { loadMovies } from "../src/js/loadApiData.js";

import app from "../app.js"; 

test("movies page shows the correct title on the movies", async () => {
    const response = await request(app)
    .get("/movies")
    .expect(200); 

    expect(response.text.includes("The Godfather")).toBeTruthy(); 
    expect(response.text.includes("Dark Knight")).toBeTruthy(); 
    expect(response.text.includes("The Shawshank Redemption")).toBeTruthy(); 
    expect(response.text.includes("Idiocracy")).toBeTruthy(); 
    expect(response.text.includes("12 Angry Men")).toBeTruthy(); 
    expect(response.text.includes("The Godfather: Part II")).toBeTruthy(); 
    expect(response.text.includes("Threat Level Midnight: The Movie")).toBeTruthy(); 
}); 

test("movies page shows the same title for the movies as the data form the api", async () => {
    const movies = await loadMovies();
    const titles = movies.map(t => t.attributes.title); 

    const response = await request(app)
    .get("/movies")
    .expect(200); 

    for (let i = 0; i < titles.length; i++){
        expect(response.text.includes(titles[i])).toBeTruthy(); 
    }
}); 

test("The Movie page for The Shawshank Redemption shows the correct title", async () => {
    const response = await request(app)
    .get("/movies/1")
    .expect(200); 

    expect(response.text.includes("The Shawshank Redemption")).toBeTruthy(); 
}); 

test("The Movie page for The Godfather shows the correct title", async () => {
    const response = await request(app)
    .get("/movies/2")
    .expect(200); 

    expect(response.text.includes("The Godfather")).toBeTruthy(); 
}); 

test("The Movie page for The Godfather: Part II shows the correct title", async () => {
    const response = await request(app)
    .get("/movies/3")
    .expect(200); 

    expect(response.text.includes("The Godfather: Part II")).toBeTruthy(); 
}); 

test("The Movie page for The Dark Knight shows the correct title", async () => {
    const response = await request(app)
    .get("/movies/4")
    .expect(200); 

    expect(response.text.includes("The Dark Knight")).toBeTruthy(); 
}); 

test("The Movie page for 12 Angry Men shows the correct title", async () => {
    const response = await request(app)
    .get("/movies/5")
    .expect(200); 

    expect(response.text.includes("12 Angry Men")).toBeTruthy(); 
}); 

test("The Movie page for Idiocracy shows the correct title", async () => {
    const response = await request(app)
    .get("/movies/8")
    .expect(200); 

    expect(response.text.includes("Idiocracy")).toBeTruthy(); 
}); 

test("The Movie page for Threat Level Midnight: The Movie shows the correct title", async () => {
    const response = await request(app)
    .get("/movies/10")
    .expect(200); 

    expect(response.text.includes("Threat Level Midnight: The Movie")).toBeTruthy(); 
}); 