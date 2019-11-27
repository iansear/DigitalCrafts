let menuBar = document.createElement("div")
menuBar.id = "menuBar"
let menuBlock = document.createElement("div")
menuBlock.id = "menuBlock"

let fullMenuButton = document.createElement("button")
fullMenuButton.innerHTML = "View Full Menu"
let startersMenuButton = document.createElement("button")
startersMenuButton.innerHTML = "View Starters Menu"
let entreesMenuButton = document.createElement("button")
entreesMenuButton.innerHTML = "View Entrees Menu"
let dessertsMenuButton = document.createElement("button")
dessertsMenuButton.innerHTML = "View Desserts Menu"


menuBar.appendChild(fullMenuButton)
menuBar.appendChild(startersMenuButton)
menuBar.appendChild(entreesMenuButton)
menuBar.appendChild(dessertsMenuButton)

document.body.appendChild(menuBar)
document.body.appendChild(menuBlock)

fullMenuButton.addEventListener("click", function() {
  cleanMenu()
  populateMenu(dishes)
})

startersMenuButton.addEventListener("click", function() {
  cleanMenu()
  let starters = dishes.filter((el) => el["course"] == "Starters")
  populateMenu(starters)
})

entreesMenuButton.addEventListener("click", function() {
  cleanMenu()
  let entrees = dishes.filter((el) => el["course"] == "Entrees")
  populateMenu(entrees)
})

dessertsMenuButton.addEventListener("click", function() {
  cleanMenu()
  let desserts = dishes.filter((el) => el["course"] == "Desserts")
  populateMenu(desserts)
})

function populateMenu(menuJSON) {
  menuJSON.forEach((item, index) => {
    let menuItem = document.createElement("div")
    menuItem.id = item["id"]

    let title = document.createElement("h2")
    title.innerHTML = item["title"]
    let image = document.createElement("img")
    image.src = item["imageURL"]
    let description = document.createElement("p")
    description.innerHTML = item["description"]
    let price = document.createElement("p")
    price.innerHTML = item["price"]

    menuItem.appendChild(title)
    menuItem.appendChild(image)
    menuItem.appendChild(description)
    menuItem.appendChild(price)

    menuBlock.appendChild(menuItem)
  })
}

function cleanMenu() {
  menuBlock.innerHTML = ""
}

populateMenu(dishes)
