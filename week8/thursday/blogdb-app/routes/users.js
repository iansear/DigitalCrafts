const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router()

router.post("/login", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    db.one("SELECT user_id, username, password FROM users WHERE user_name = $1;", [username]).then((user) => {
        bcrypt.compare(password, user.password).then(isPassword => {
            if(isPassword) {
                req.session.user_id = user.user_id
                req.session.username = user.user_name
                res.redirect("/posts")
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

router.post("/register", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    bcrypt.hash(password, 10).then((hashword) => {
        db.one("INSERT INTO users(username, password) VALUES($1, $2) RETURNING user_id;", [username, hashword])
        .then( (user_id) => {
            req.session.user_id = user_id.user_id
            req.session.username = username
            res.redirect("/posts")
        })
    })
})

module.exports = router