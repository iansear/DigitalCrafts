const url = "http://localhost:3000/todo"

let taksList = document.getElementById("taskList")
let taskName = document.getElementById("taskName")
let taskPriority = document.getElementById("taskPriority")
let taskButton = document.getElementById("taskButton")

taskButton.addEventListener("click", () => {
    let date = Date.now()
    let task =  new Task(taskName.value, taskPriority.value, date, "", false)
    addTask(task)
})

async function getTasks() {
    let tasksRaw = await fetch(url)
    let tasks = await tasksRaw.json()
    displayTasks(tasks)
}

async function addTask(task) {
    await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      getTasks()
}

function displayTasks(tasks) {
    let taskUL = []
    tasks.results.forEach((val) => {
        let timestamp = new Date(val.dateCreated)
        let date = `${timestamp}`
        taskUL.push(`<li>${val.title} Priority: ${val.priority} Created: ${date}</li>`)
    })
    taskList.innerHTML = taskUL.join(" ")
}

getTasks()
