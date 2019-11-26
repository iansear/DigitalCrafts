let addBlock = document.createElement("div")
addBlock.id = "addBlock"
let addLabel = document.createElement("label")
addLabel.innerHTML = "Add Task:"
let addTask = document.createElement("input")
addTask.setAttribute("type", "text")
addTask.placeholder = "Enter new task"
let addButton = document.createElement("button")
addButton.innerHTML = "Add"

let pendingBlock = document.createElement("div")
pendingBlock.id = "pendBlock"
let pendingLabel = document.createElement("label")
pendingLabel.innerHTML = "Pending Tasks"
let pendingList = document.createElement("ul")

let completedBlock = document.createElement("div")
completedBlock.id = "compBlock"
let completedLabel = document.createElement("label")
completedLabel.innerHTML = "Completed Tasks"
let completedList = document.createElement("ul")

addBlock.appendChild(addLabel)
addBlock.appendChild(addTask)
addBlock.appendChild(addButton)

pendingBlock.appendChild(pendingLabel)
pendingBlock.appendChild(pendingList)

completedBlock.appendChild(completedLabel)
completedBlock.appendChild(completedList)

document.body.appendChild(addBlock)
document.body.appendChild(pendingBlock)
document.body.appendChild(completedBlock)

function setComplete(obj) {
  if(obj.checked == true) {
    let li = obj.parentElement
    completedList.appendChild(li)
  } else {
    let li = obj.parentElement
    pendingList.appendChild(li)
  }
}

function removeItem(obj) {
  let li = obj.parentElement
  if(pendingList.contains(obj)) {
    pendingList.removeChild(li)
  } else {
    completedList.removeChild(li)
  }
}

addButton.addEventListener("click", function() {
  let taskName = addTask.value

  let liItem = `<li>
                  <input type="checkbox" onclick="setComplete(this)">
                  <label>${taskName}</label>
                  <button onclick="removeItem(this)">Remove</button>
               </li>`

  pendingList.insertAdjacentHTML("beforeend", liItem)
})
