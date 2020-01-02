const express = require("express")
const router = express.Router()

router.post("/login", async (req, res) => {
    let username = req.body.username
    let password = req.body.password
    const user = await db.any("SELECT user_id FROM users WHERE user_name = $1 AND password = $2;", [username, password])
    if(user[0].user_id) {
        req.session.user_id = user[0].user_id
        res.redirect("/posts")
    } else {
        res.redirect("/")
    }
})

router.get("/signout", (req, res) => {
    req.session.destroy
    res.redirect("/")
})

router.post("/register", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    db.one("INSERT INTO users(user_name, password) VALUES($1, $2) RETURNING user_id;", [username, password])
    .then( (user_id) => {
        req.session.user_id = user_id.user_id
        res.redirect("/posts")
    })
})

module.exports = router