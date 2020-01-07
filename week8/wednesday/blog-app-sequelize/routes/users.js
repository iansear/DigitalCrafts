const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router()

router.post("/register", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    bcrypt.hash(password, 10).then((hashword) => {
        const user = models.User.build({
            username: username,
            password: hashword})
        user.save().then((user) => {
            req.session.userid = user.id
            req.session.username = user.username
            req.session.isAuth = true
            res.redirect("/posts")
        }).catch(() => {
            res.render("login", {message: "Username already in use."})
        })
    })
})

router.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    models.User.findOne({
        where: {
            username: username
        }
    }).then((user) => {
        bcrypt.compare(password, user.password).then(isPassword => {
            if(isPassword) {
                req.session.userid = user.id
                req.session.username = user.username
                req.session.isAuth = true
                res.redirect("/posts")
            } else {
                res.render("login", {message: "Incorrect Login Info"})
            }
        })
    }).catch(() => {
        res.render("login", {message: "Incorrect Login Info"})
    })
})

router.post("/signout", (req, res) => {
    req.session.destroy
    res.redirect("/")
})

module.exports = router