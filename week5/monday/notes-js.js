let postsUL = document.getElementById("postUL")
//Dummy data
const url = "https://jsonplaceholder.typicode.com/posts"

// let request = new XMLHttpRequest()
// request.addEventListener("load", (e) => {
//   console.log(e.target.responseText)
// })

let request = new XMLHttpRequest()
request.addEventListener("load", function() {
  //console.log(this.responseText)
  //string to JSON
  let posts = JSON.parse(this.responseText)

  let postItems = posts.map((post) => {
    return `<li>${post.title}</li>`
  })

  postsUL.innerHTML = postItems.join(" ")
})

request.open("GET", url)
request.send()
