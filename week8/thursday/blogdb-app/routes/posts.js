const express = require("express")
const router = express.Router()

router.get("/", async (req,res) => {
    let user_id = req.session.user_id
    const posts = await db.any("SELECT post_id, title, body FROM posts WHERE user_id = $1;", [user_id])
    res.render("posts",{posts: posts})
})

router.post("/", (req, res) => {
    let title = req.body.title
    let body = req.body.body
    let user_id = req.session.user_id
    db.none("INSERT INTO posts(title, body, user_id) VALUES($1, $2, $3);", [title, body, user_id]).then( () => {
        res.redirect("/posts")
    })
})

router.get("/:post", async (req, res) => {
    let post_id = req.params.post
    const post = await db.any("SELECT post_id, title, body FROM posts WHERE post_id = $1;", [post_id])
    res.render("post",{post: post})
})

router.post("/posts-update", (req, res) => {
    let post_id = req.body.post_id
    let title = req.body.title
    let body = req.body.body
    db.none("UPDATE posts SET title = $1, body = $2 WHERE post_id = $3;", [title, body, post_id]).then(() => {
        res.redirect("/posts")
    })
})

router.post("/posts-delete", (req, res) => {
    let post_id = req.body.post_id
    db.none("DELETE FROM posts WHERE post_id = $1;", [post_id]).then(() => {
        res.redirect("/posts")
    })
})

module.exports = router