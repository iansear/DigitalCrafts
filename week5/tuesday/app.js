const postURL = "https://hungry-diagram.glitch.me/movies"

const savePostButton = document.querySelector("#savePostButton")

savePostButton.addEventListener("click", () => {
    let request = new XMLHttpRequest()
    request.open("POST", postURL)
    request.setRequestHeader("Content-Type", "application/json")

    let body = { "title": "action movie name", "rating": "whaaaa"}

    request.send(JSON.stringify(body))
})