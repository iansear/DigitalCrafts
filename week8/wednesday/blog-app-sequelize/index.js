const express = require('express')
const app = express()
app.use(express.urlencoded())
app.listen(3000,() => {
    console.log('Running...')
})

const mustacheExpress = require('mustache-express')
app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

global.models = require('./models')

const userRouter = require("./routes/users")
const postRouter = require("./routes/posts")

app.use("/users", userRouter)
app.use("/myposts", postRouter)

app.get("/", (req, res) => {
    res.render("login")
})