const express = require("express")
const app = express()
app.use(express.urlencoded())
app.listen(3000,() => {
    console.log("Running...")
})

const mustacheExpress = require("mustache-express")
app.engine('mustache',mustacheExpress("./views/partials", ".mustache"))
app.set('views','./views')
app.set('view engine','mustache')

const session = require("express-session")
app.use(session({
    secret: "He who has a why to live can bear almost any how",
    resave: false,
    saveUninitialized: true
}))

global.models = require('./models')

function auth(req,res,next) {
    if(req.session.isAuth) {
        next()
    } else {
        res.redirect("/")
    }
}

const userRouter = require("./routes/users")
const postRouter = require("./routes/posts")

app.use("/users", userRouter)
app.use("/posts", auth, postRouter)

app.get("/", (req, res) => {
    res.render("login")
})