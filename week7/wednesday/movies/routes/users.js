const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index")
})

router.post("/users", (req, res) => {
    user = req.body.username
    res.redirect("/movies")
})

module.exports = router