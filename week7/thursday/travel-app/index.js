const express = require("express")
const mustacheExpress = require('mustache-express')
const session = require("express-session")
const app = express()
const path = require("path")
const VIEWS_PATH = path.join(__dirname, '/views')
const userRouter = require("./routes/users")
const travelRouter = require("./routes/travel")

app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials','.mustache'))

app.set('views',VIEWS_PATH)
app.set('view engine','mustache')

function auth(req,res,next) {
    if(req.session) {
        if(req.session.isAuth) {
            next()
        } else {
            res.redirect('/')
        }
    } else {
        res.redirect('/')
    }
}

app.use(express.urlencoded())
app.use(session({
    secret: "a very big secret",
    resave: false,
    saveUninitialized: true
}))
app.use("/users", userRouter)
app.use("/travel", auth, travelRouter)

app.listen(3000,() => {
    console.log("Running...")
})

app.get("/", (req, res) => {
    res.render("index")
})