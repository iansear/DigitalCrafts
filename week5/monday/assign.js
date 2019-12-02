let postsUL = document.getElementById("postUL")
const url = "https://jsonplaceholder.typicode.com/photos"

function getPhotos(completion) {
  let photos = []
  let request = new XMLHttpRequest()
  request.onload = function() {
    photos = JSON.parse(this.responseText)
    completion(photos)
  }
  request.open("GET", url)
  request.send()
}

getPhotos((photos) => {
  updateUI(photos)
})

function updateUI(photos) {
  let photoItems = photos.map((post) => {
    return `<li>
              <img src="${post.thumbnailUrl}">
              <label>${post.title}</label>
            </li>`

  })
  postsUL.innerHTML = photoItems.join(" ")
}
