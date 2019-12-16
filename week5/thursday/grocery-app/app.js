let db = firebase.database()
let root = db.ref()
let shoppingList = root.child("ShoppingList")

let addStoreBlock = document.getElementById("addStoreBlock")
let addStoreForm = document.getElementById("addStoreForm")
let addStoreText = document.getElementById("addStoreText")
let addItemText = document.getElementById("addItemText")
let addStoreButton = document.getElementById("addStoreButton")

let logoutButton = document.getElementById("logout")

addStoreBlock.appendChild(addStoreForm)
addStoreForm.appendChild(addStoreText)
addStoreForm.appendChild(addItemText)
addStoreForm.appendChild(addStoreButton)

let masterListUL = document.getElementById("masterlist")

addStoreButton.addEventListener("click", () => {
    if(addStoreText.value != "" && addItemText.value != "") {
        let store = addStoreText.value
        let newStore = shoppingList.child(store)
        newStore.push({
            item: addItemText.value
        })
    }
})

logoutButton.addEventListener("click", () => {
    firebase.auth().signOut().then(function() {
    }, function(error) {
        console.error(error);
    })
})

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("logged in")
    } else {
        window.location = "register.html"
    }
})

function getList() {
    shoppingList.on("value",(snapshot) => {
        let masterList = snapshot.val()
        displayList(masterList)
    })
}

function displayList(list) {
    let listItems = []
    for(let key in list) {
        listItems.push(`<label>${key}</label>`)
        listItems.push("<ul>")
        for(let key2 in list[key]) {
            listItems.push(`<li>${list[key][key2].item}
                            <button onclick="removeItem('${key}','${key2}')">Remove</button></li>`)
        }
        listItems.push("</ul>")
    }
    masterListUL.innerHTML = listItems.join(" ")
}

function removeItem(key, key2) {
    shoppingList.child(`/${key}/${key2}`).remove()
}

getList()
