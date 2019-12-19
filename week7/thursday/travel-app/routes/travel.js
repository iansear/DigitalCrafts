const express = require("express")
const Trip = require("./models/trip")
const router = express.Router()

router.get("/", (req, res) =>  {
    let user = req.session.user.username
    let trips = req.session.user.trips
    let context = {user: user, trips: trips}
    res.render("travel", context)
})

router.post("/addTrip", (req, res) => {
    let title = req.body.title
    let image = req.body.image
    let departDate = req.body.departDate
    let returnDate = req.body.returnDate
    let newTrip = new Trip(title, image, departDate, returnDate)
    req.session.user.trips.push(newTrip)
    res.redirect("/travel")
})

module.exports = router