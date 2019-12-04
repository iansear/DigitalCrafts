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

const URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

orderButton.addEventListener("click", () => {
    let orderString = `{"emailAddress": "${orderEmail.value}", "coffee": "${orderText.value}"}`
    postOrder(orderString)
})

searchAll.addEventListener("click", () => {
    getOrders((orders) => {
        displayOrders(orders)
    }, URL)
})

searchEmailButton.addEventListener("click", () => {
       let getURL = URL + searchEmail.value
    getOrders((orders) => {
        let order = {}
        if(searchEmail.value == "") {
            order = orders
        } else {
            order.key = orders
        }
        displayOrders(order)
    }, getURL)
})

function postOrder(orderString) {
    let request = new XMLHttpRequest()
    request.open("POST", URL)
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
            orderItems.push(`<li>Email: ${orders[key].emailAddress}</li>
                             <li>Order: ${orders[key].coffee}</li>
                             <button id="deleteButton" onclick="deleteOrder('${orders[key].emailAddress}')">Delete</button>`)
        }
    })
    resultsList.innerHTML = orderItems.join(" ")
}

function deleteOrder(email) {
    let deleteURL = URL + email
    let request = new XMLHttpRequest()
    request.open("DELETE", deleteURL)
    request.send()
}
