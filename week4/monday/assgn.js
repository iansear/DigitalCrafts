let blackscreen = document.createElement('button')
let whitescreen = document.createElement('button')

blackscreen.addEventListener('click', function() {
  document.body.style.backgroundColor = 'black'
})

whitescreen.addEventListener('click', function() {
  document.body.style.backgroundColor = 'white'
})

blackscreen.innerHTML = "Black Background"
whitescreen.innerHTML = "White Background"

document.body.appendChild(blackscreen)
document.body.appendChild(whitescreen)
