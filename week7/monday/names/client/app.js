const url = "http://localhost:3000/names"

let nameList = document.getElementById("nameList")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let nameButton = document.getElementById("nameButton")

nameButton.addEventListener("click", () => {
    let name = {"firstName": firstName.value, "lastName": lastName.value}
    addNames(name)
})

async function getNames() {
    let namesRaw = await fetch(url)
    let names = await namesRaw.json()
    displayNames(names)
}

async function addNames(name) {
    await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
      })
      getNames()
}

function displayNames(names) {
    let nameUL = []
    names.results.forEach((val) => {
        nameUL.push(`<li>${val.name}</li>`)
    })
    nameList.innerHTML = nameUL.join(" ")
}

getNames()
