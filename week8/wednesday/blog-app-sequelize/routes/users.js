const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router()

router.post("/register", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    bcrypt.hash(password, 10).then((hashword) => {
        let user = models.User.build({
            username: username,
            password: hashword})
        user.save().then(() => {
            res.redirect("/myposts")
        })
    })
})

router.post("/login", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    models.User.findOne({
        where: {
            username: username
        }
    }).then((user) => {
        bcrypt.compare(password, user.password).then(isPassword => {
            if(isPassword) {
                res.redirect("/myposts")
            } else {
                res.render("login", {message: "Incorrect Login Info"})
            }
        })
    }).catch(() => {
        res.render("login", {message: "Incorrect Login Info"})
    })
})

router.get("/signout", (req, res) => {
    req.session.destroy
    res.redirect("/")
})

module.exports = router