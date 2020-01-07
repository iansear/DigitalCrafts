const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    const username = req.session.username
    models.Post.findAll().then(posts => res.render("posts", {username: username, posts: posts}))
})

router.post("/menu-posts", (req, res) => {
    res.redirect("/posts")
})

router.get("/myposts", (req, res) => {
    const username = req.session.username
    models.Post.findAll({
        where: {
            userid: req.session.userid
        }
    }).then(posts => res.render("myposts", {username: username, posts: posts}))
})

router.post("/menu-myposts", (req, res) => {
    res.redirect("/posts/myposts")
})

router.post("/myposts", (req, res) => {
    const title = req.body.title
    const body = req.body.body
    const category = req.body.category
    const userid = req.session.userid
    const post = models.Post.build({
        title: title,
        body: body,
        category: category,
        userid: userid
    })
    post.save().then(() => {
        res.redirect("/posts/myposts")
    })
})

router.post("/category", (req, res) => {
    const category = req.body.category
    if(category == "all") {
        res.redirect("/posts")
    } else {
        models.Post.findAll({
            where: {
                category: category
            }
        }).then((posts) => {
            res.render("posts", {posts: posts})
        })
    }
})

router.post("/mypost-update", (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const body = req.body.body
    models.Post.update({
        title: title,
        body: body
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/posts/myposts")
    })
})

router.post("/mypost-delete", (req, res) => {
    const id = req.body.id
    models.Post.destroy({
            where: {
                id: id
            }
        }
    ).then(() => {
        res.redirect("/posts/myposts")
    })
})

router.post("/post-comment", (req, res) => {
    const postid = req.body.postid
    const comment = req.body.comment
    const mycomment = models.Comment.build({
        comment: comment,
        postid: postid
    })
    mycomment.save().then(() => {
        const postid = req.body.postid
        res.redirect(`/posts/post/${postid}`)
    })
})

router.post("/delete-comment", (req, res) => {
    const id = req.body.id
    const postid = req.body.postid    
    models.Comment.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect(`/posts/myposts/mypost/${postid}`)
    })
})

router.get("/myposts/mypost/:mypost", (req, res) => {
    const id = req.params.mypost
    models.Post.findByPk(id, {
        include: [
            {
                model: models.Comment,
                as: 'comments'
            }
        ]
    }).then((post) => {
        res.render("mypost", {post: post})
    })
})

router.get("/post/:post", (req, res) => {
    const id = req.params.post
    models.Post.findByPk(id, {
        include: [
            {
                model: models.Comment,
                as: 'comments'
            }
        ]
    }).then((post) => {
        res.render("post", {post: post})
    })
})

module.exports = router