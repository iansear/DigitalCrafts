let newsBlock = document.getElementById("news")

function populateNews(newsJSON) {
  newsJSON.forEach((item, index) => {
    let newsItem = document.createElement("div")

    let title = document.createElement("h2")
    title.innerHTML = item["title"]
    let image = document.createElement("img")
    image.src = item["urlToImage"]
    let description = document.createElement("p")
    description.innerHTML = item["description"]
    let author = document.createElement("p")
    author.innerHTML = item["author"]
    let url = document.createElement("a")
    url.href = item["url"]
    url.innerHTML = "Read More"
    let published = document.createElement("p")
    published.innerHTML = item["publishedAt"]

    newsItem.appendChild(title)
    newsItem.appendChild(image)
    newsItem.appendChild(description)
    newsItem.appendChild(author)
    newsItem.appendChild(url)
    newsItem.appendChild(published)

    newsBlock.appendChild(newsItem)
  })
}

populateNews(news["articles"])
