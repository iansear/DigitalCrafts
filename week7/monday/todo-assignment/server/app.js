const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

let todo = []

app.listen(3000, () => {
    console.log("Running on PORT 3000...")
})

app.get("/todo", (req, res) => {
    let length = todo.length
    res.send({"totalResults": length, "results": todo})
})

app.post("/todo", (req, res) => {
    let newTask = {
        "title": req.body.title, 
        "priority": req.body.priority,
        "dateCreated": req.body.dateCreated,
        "dateCompleted": req.body.dateCompleted,
        "isCompleted": req.body.isCompleted
    }
    todo.push(newTask)
    res.json(newTask)
})
