let addBlock = document.createElement("div")
let addTask = document.createElement("input")
addTask.setAttribute("type", "text")
addTask.placeholder = "Enter new task"
let addButton = document.createElement("button")
addButton.innerHTML = "Add"
let pendingList = document.createElement("ul")
let completedList = document.createElement("ul")

addBlock.appendChild(addTask)
addBlock.appendChild(addButton)

document.body.appendChild(addBlock)
document.body.appendChild(pendingList)
document.body.appendChild(completedList)

addButton.addEventListener("click", function() {
  let checkBox = document.createElement("input")
  checkBox.setAttribute("type", "checkbox")
  let rmButton = document.createElement("button")
  rmButton.innerHTML = "Remove"
  let label = document.createElement("label")
  label.innerHTML = addTask.value
  let newTask = document.createElement("li")

  newTask.appendChild(checkBox)
  newTask.appendChild(label)
  newTask.appendChild(rmButton)

  checkBox.addEventListener("change", function() {
    if(this.checked) {
      completedList.appendChild(newTask)
      rmButton.addEventListener("click", function() {
        completedList.removeChild(newTask)
      })
    } else {
      pendingList.appendChild(newTask)
      rmButton.addEventListener("click", function() {
        pendingList.removeChild(newTask)
      })
    }
  })

  rmButton.addEventListener("click", function() {
    pendingList.removeChild(newTask)
  })

  pendingList.appendChild(newTask)
})
