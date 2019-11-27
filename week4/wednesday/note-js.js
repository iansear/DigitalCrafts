// function updateTimer() {
//   console.log("Timer fired...")
// }
//
// window.setInterval(updateTimer, 1000)

//Callback function, callrepeatedly
// let intervalID = window.setInterval(function() {
//    console.log("Timer fired...")
//  }, 1000)

// Called once
// window.setTimeout()

//stop the interval
//window.clearInterval(intervalID)

// function sayHello() {
//   console.log("Hello!")
// }
//
// function greet(callback) {
//   window.setInterval(callback, 3000)
// }
//
// greet(sayHello)

//TIMER
let timerBox = document.createElement("div")
let counter = document.createElement("h1")
counter.innerHTML = "00"
let goButton = document.createElement("button")
goButton.innerHTML = "START"
let timeInput = document.createElement("input")
timeInput.setAttribute("type", "text")

timerBox.appendChild(counter)
timerBox.appendChild(timeInput)
timerBox.appendChild(goButton)

document.body.appendChild(timerBox)

goButton.addEventListener("click", () => {
  let timerValue = timeInput.value
  let intID = setInterval(() => {
    if(timerValue < 0) {
      window.clearInterval(intID)
    } else {
      counter.innerHTML = timerValue
      timerValue --
    }

  }, 1000)
})
