let orderBlock = document.getElementById("placeOrderBlock")
let orderText = document.getElementById("orderText")
let orderEmail = document.getElementById("orderEmail")
let orderButton = document.getElementById("orderButton")

let searchOrderBlock = document.getElementById("searchOrderBlock")
let searchEmail = document.getElementById("searchEmail")
let searchEmailButton = document.getElementById("searchEmailButton")
let searchAll = document.getElementById("searchAll")
let resultsList = document.getElementById("resultsList")

orderBlock.appendChild(orderText)
orderBlock.appendChild(orderEmail)
orderBlock.appendChild(orderButton)

searchOrderBlock.appendChild(searchEmail)
searchOrderBlock.appendChild(searchEmailButton)
searchOrderBlock.appendChild(searchAll)
searchOrderBlock.appendChild(resultsList)

orderButton.addEventListener("click", () => {
    let orderString = `{"emailAddress": "${orderEmail.value}", "coffee": "${orderText.value}"}`
    postOrder(orderString)
})

searchAll.addEventListener("click", () => {
    const getURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
    getOrders((orders) => {
        displayOrders(orders)
    }, getURL)
})

searchEmailButton.addEventListener("click", () => {
    let getURL = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${searchEmail.value}`
    getOrders((orders) => {
        let order = orders
        if(searchEmail.value == "") {
            order = orders
        } else {
            let key = searchEmail.value
            order = { key : orders }
        }
        displayOrders(order)
    }, getURL)
})

function postOrder(orderString) {
    const postURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
    let request = new XMLHttpRequest()
    request.open("POST", postURL)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(orderString)
}

function getOrders(orderFunct, url) {
    let orders = []
    let request = new XMLHttpRequest()
    request.open("GET", url)
    request.send()
    request.onload = function() {
        orders = JSON.parse(this.responseText)
        orderFunct(orders)
    }
}

function displayOrders(orders) {
    let orderItems = []
    Object.keys(orders).forEach((key) => {
        if(orders[key] != null) {
            orderItems.push(`<li>Email: ${orders[key].emailAddress} Order: ${orders[key].coffee}
                <button id="deleteButton" onclick="deleteOrder('${key}')">Delete</button></li>`)
        }
    })
    resultsList.innerHTML = orderItems.join(" ")
}

function deleteOrder(key) {
    let url = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${key}`
    let request = new XMLHttpRequest()
    request.open("DELETE", url)
    request.send()
}
