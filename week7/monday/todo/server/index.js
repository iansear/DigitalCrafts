const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

let movies = []

//GET
app.get("/hello", (req, res) => {
    // res.send("Hello World!")
    //respond only once or error server side
    res.json({name: "Joe"})
})

//Start server
app.listen(3000, () => {
    console.log("PORT 3000")
})

//To start server, run in terminal
//node index.js

//control^ C to terminate

//--------- Activity ----------------

app.get("/movies", (req, res) => {
    // let movies = [{
    //     title: "spiderman",
    //     year: "1999"
    // }, {
    //     title: "spiderman 2",
    //     year: "2000"
    // }, {
    //     title: "spidermen 3",
    //     year: "2001"
    // }]

    // let response = {
    //     totalResults: 100,
    //     search: movies
    // }

    // res.json(response)
    res.json(movies)
})

app.post("/movies", (req, res) => {
    movies.push(req.body)
    res.send(req.body)
})

//---------- Assignment ------------

names = []

app.get("/names", (req, res) => {
    res.json(names)
})

app.post("/names", (req, res) => {
    let name = `${req.body.firstName} ${req.body.lastName}`
    names.push({"name": name})
    res.send(name)
})