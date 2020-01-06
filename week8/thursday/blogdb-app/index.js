const express = require("express")
const app = express()
app.use(express.urlencoded())
const mustacheExpress = require('mustache-express')
app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

const userRouter = require("./routes/users")
const postRouter = require("./routes/posts")

const pgp = require("pg-promise")()
const connectionString = "postgres://localhost:5432/blogdb"
global.db = pgp(connectionString)

function auth(req,res,next) {
    next()
    // if(req.session) {
    //     if(req.session.isAuth) {
    //         next()
    //     } else {
    //         res.redirect('/')
    //     }
    // } else {
    //     res.redirect('/')
    // }
}

const session = require("express-session")
app.use(session({
    secret: "a very big secret",
    resave: false,
    saveUninitialized: true
}))

app.use("/users", userRouter)
app.use("/posts", auth, postRouter)

app.get("/", (req, res) => {
    res.render("login")
})

app.listen(3000, () => {
    console.log("Running...")
})