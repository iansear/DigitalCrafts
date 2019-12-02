const apikey = "90328160"

let searchBar = document.getElementById("searchBar")
let searchText = document.getElementById("searchText")
let searchButton = document.getElementById("searchButton")
let moviesList = document.getElementById("moviesList")
let movieDetails = document.getElementById("movieDetails")

searchBar.appendChild(searchText)
searchBar.appendChild(searchButton)

function getInfo(completion, url) {
  let info = []
  let request = new XMLHttpRequest()
  request.onload = function() {
    info = JSON.parse(this.responseText)
    completion(info)
  }
  request.open("GET", url)
  request.send()
}

function displayDetails(url) {
  getInfo((movie) => {
    movieDetails.innerHTML = `<h1>${movie.Title}</h1>
                              <img src="${movie.Poster}">
                              <p>${movie.Plot}</p>
                              <h3>Rated: ${movie.Rated}</h3>
                              <h3>IMDB Rating: ${movie.imdbRating}</h3>
                              <h3>Released: ${movie.Released}</h3>
                              <h3>Runtime: ${movie.Runtime}</h3>
                              `
  }, url)
}

function updateList(movies) {
  let movieItems = movies.Search.map((movie) => {
    let url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apikey}`
    return `<div>
              <a onclick="displayDetails('${url}')">${movie.Title}</a>
              <img src="${movie.Poster}">
            </div>`
  })
  moviesList.innerHTML = movieItems.join(" ")
}

searchButton.addEventListener("click", function() {
  movieDetails.innerHTML = ""
  let search = searchText.value
  let searchURL = `http://www.omdbapi.com/?s=${search}&apikey=${apikey}`
  getInfo((movies) => {
    updateList(movies)
  }, searchURL)
})
