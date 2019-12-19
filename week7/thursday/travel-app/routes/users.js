const express = require("express")
const User = require("./models/user")
const router = express.Router()

let users = []

router.get("/login", (req, res) => {
    res.render("login")
})

router.post("/login", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let theUser = users.find((user) => {
        return user.username == username && user.password == password
    })
    if(theUser) {
        if(req.session) {
            req.session.isAuth = true
            req.session.user = theUser
            res.redirect("/travel")
        } else {
            res.redirect("/")
        }
    } else {
        res.redirect("/")
    }
})

router.get("/signout", (req, res) => {
    users.forEach((user) => {
        if(user.username == req.session.user.username) {
            user.trips = req.session.user.trips
        }
    })
    req.session.destroy
    res.redirect("/")
})

router.get("/register", (req, res) => {
    res.render("register")
})

router.post("/register", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let newUser = new User(username, password, [])
    users.push(newUser)
    req.session.isAuth = true
    req.session.user = newUser
    res.redirect("/travel")
})

module.exports = router