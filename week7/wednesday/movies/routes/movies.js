const express = require("express")
const Movie = require("./models/movie")
const router = express.Router()

router.get("/movies", (req, res) => {
    res.render("movies", {user: user, movies: movies})
})

router.get("/movies/:movie", (req, res) => {
    movie = movies.filter((el) => el.title == req.params.movie)
    res.render("movie", {user: user, movies: movie})
})

router.get("/movies/genre", (req, res) => {
    moviesGenre = movies.filter((el) => el.genre == req.params.movie)
    res.render("genre", {user: user, movies: movieGenre})
})

router.post("/movies/create", (req, res) => {
    let title = req.body.title
    let description = req.body.description
    let genre = req.body.genre
    let posterURL = req.body.posterURL
    let movie = new Movie(title, description, genre, posterURL)
    movies.push(movie)
    res.redirect("/movies")
})

router.post("/movies/delete", (req, res) => {
    movies = movies.filter((movie) => movie.title != req.body.deleteMovie)
    res.redirect("/movies")
})

module.exports = router