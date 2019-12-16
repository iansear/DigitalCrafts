const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

names = []

app.listen(3000, () => {
    console.log("Running on PORT 3000...")
})

app.get("/names", (req, res) => {
    let length = names.length
    res.send({"totalResults": length, "results": names})
})

app.post("/names", (req, res) => {
    let name = `${req.body.firstName} ${req.body.lastName}`
    names.push({"name": name})
    res.json(name)
})
