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

// app.get("/posts", async (req,res) => {
//     const posts = await db.any("SELECT post_id, title, body FROM posts;")
//     res.render("posts",{posts: posts})
// })

// app.post("/posts", (req, res) => {
//     let title = req.body.title
//     let body = req.body.body
//     db.none("INSERT INTO posts(title, body) VALUES($1, $2);", [title, body]).then( () => {
//         res.redirect('/posts')
//     })
// })

// app.get("/posts/:post", async (req, res) => {
//     let post_id = req.params.post
//     const post = await db.any("SELECT post_id, title, body FROM posts WHERE post_id = $1;", [post_id])
//     res.render("post",{post: post})
// })

// app.post("/posts-update", (req, res) => {
//     let post_id = req.body.post_id
//     let title = req.body.title
//     let body = req.body.body
//     db.none("UPDATE posts SET title = $1, body = $2 WHERE post_id = $3;", [title, body, post_id]).then(() => {
//         res.redirect("/posts")
//     })
// })

// app.post("/posts-delete", (req, res) => {
//     let post_id = req.body.post_id
//     db.none("DELETE FROM posts WHERE post_id = $1;", [post_id]).then(() => {
//         res.redirect("/posts")
//     })
// })

app.get("/", (req, res) => {
    res.render("login")
})

app.listen(3000, () => {
    console.log("Running...")
})