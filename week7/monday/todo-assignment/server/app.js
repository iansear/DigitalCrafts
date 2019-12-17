const Task = require("./task")
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
    let newTask = new Task(req.body.title, req.body.priority, 
        req.body.dateCreated, req.body.dateCompleted, req.body.isCompleted)
    todo.push(newTask)
    res.json(newTask)
})
