const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")
const Trip = require("./models/trip")
app.use(express.urlencoded())

app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mustache")

let trips = []

app.get("/trips", (req, res) => {
    res.render("trips", {mytrips: trips})
})

app.post("/trips", (req, res) => {
    let newTrip = new Trip(req.body.title, "imageURL", req.body.departDate, req.body.returnDate)
    trips.push(newTrip)
    res.redirect("/trips")
})

app.post("/rm-trips", (req, res) => {
    let tripID = req.body.rm
    let filteredTrips = trips.filter((trip) => {
        if(trip.title != tripID) {
            return trip
        }
    })
    trips = filteredTrips
    res.redirect("/trips")
})

app.listen(3000, () => {
    console.log("Running...")
})