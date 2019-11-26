let taskNameTextBox = document.getElementById("taskNameTextBox")
let addButton = document.getElementById("addButton")
let taskList = document.getElementById("taskList")

function removeItem(obj) {
  let li = obj.parentElement
  taskList.removeChild(li)
}

addButton.addEventListener("click", function() {
  let taskName = taskNameTextBox.value

  let liItem = `<li id="hello1">
                  <input type="checkbox" />
                  <label>${taskName}</label>
                  <button onClick="removeItem(this)">Remove</button>
               </li>`

  taskList.insertAdjacentHTML("beforeend", liItem)
})
