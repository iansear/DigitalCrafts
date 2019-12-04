const apiKey = "03b95ac695362a1c8f9d2b21dc7d2850"

let citySearchBlock = document.getElementById("citySearchBlock")
let cityText = document.getElementById("cityText")
let cityButton = document.getElementById("cityButton")
let weatherBlock = document.getElementById("weatherBlock")

citySearchBlock.appendChild(cityText)
citySearchBlock.appendChild(cityButton)

cityButton.addEventListener("click", () => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityText.value}&appid=${apiKey}&units=imperial`
    fetchWeather(url)
})

async function fetchWeather(url) {
    let rawResponse = await fetch(url)
    let response = await rawResponse.json()
    displayData(response)
}

function displayData(data) {
    weatherBlock.innerHTML = `<h1>${data.name} Weather</h1>
                              <h3>Current Tempurature: ${data.main.temp}</h3>
                              <h3>High: ${data.main.temp_max} Low: ${data.main.temp_min}</h3>
                              <h3>Pressure: ${data.main.pressure}`
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let url = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`
            fetchWeather(url)
        })
    }
}

getLocation()
