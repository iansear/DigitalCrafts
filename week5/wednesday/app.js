fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(json => console.log(json))

// let promise = new Promise(function(resolve, reject) {
//     let request = new XMLHttpRequest()
//     request.open("GET", "https://jsonplaceholder.typicode.com/posts")
//     request.onload = function() {
//         let posts = JSON.parse(this.responseText)
//         resolve(posts)
//     }
//     request.send()
// })
// promise.then(posts => console.log(posts))


// console.log("Hello")
// let promise = new Promise(function(resolve, reject) {
//     setTimeout( function() {
//         resolve("promise resolved")}
//         , 3000)
// })
// promise.then((message) => {
//     console.log(message)
//     return message
// })
// .then((message2) => {
//     message2 += ", and again"
//     console.log(message2)
// })
// .catch(error => {
//     console.log("promise not resolved")
// })
