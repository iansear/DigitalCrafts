const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    models.Post.findAll().then((posts) => {
        res.render("myposts", {posts: posts})
    })
})

router.post("/", (req, res) => {
    let title = req.body.title
    let body = req.body.body
    let category = req.body.category
    let post = models.Post.build({
        title: title,
        body: body,
        category: category
    })
    post.save().then(() => {
        res.redirect("/myposts")
    })
})

router.post("/category", (req, res) => {
    let category = req.body.category
    if(category == "all") {
        res.redirect("/myposts")
    } else {
        models.Post.findAll({
            where: {
                category: category
            }
        }).then((posts) => {
            res.render("myposts", {posts: posts})
        })
    }
})

router.post("/myposts-update", (req, res) => {
    let id = req.body.id
    let title = req.body.title
    let body = req.body.body
    models.Post.update({
        title: title,
        body: body
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/myposts")
    })
})

router.post("/myposts-delete", (req, res) => {
    let id = req.body.id
    models.Post.destroy({
            where: {
                id: id
            }
        }
    ).then(() => {
        res.redirect("/myposts")
    })
})

router.get("/mypost/:mypost", (req, res) => {
    let id = req.params.mypost
    models.Post.findByPk(id).then((post) => {
        res.render("mypost", {post: post})
    })
})

module.exports = router