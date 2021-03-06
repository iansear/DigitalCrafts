const express = require("express")
const app = express()
const mustacheExpress = require('mustache-express')
const userRouter = require("./routes/users")
const movieRouter = require("./routes/movies")
const path = require("path")
const VIEWS_PATH = path.join(__dirname, '/views')
var session = require("express-session")

app.use(session({
    secret: "a very big secret",
    resave: false,
    saveUninitialized: true
}))

global.user = ""
global.movies = []

app.use(express.urlencoded())
// app.use("/users", userRouter)
app.use(userRouter)
app.use(movieRouter)
app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views',VIEWS_PATH)
app.set('view engine','mustache')

app.listen(3000,() => {
    console.log("Running...")
})