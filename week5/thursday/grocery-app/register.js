let register = document.getElementById("register")
let registerEmailText = document.getElementById("registerEmail")
let registerPasswordText = document.getElementById("registerPassword")
let registerButton = document.getElementById("registerButton")

let login = document.getElementById("login")
let loginEmailText = document.getElementById("loginEmail")
let loginPasswordText = document.getElementById("loginPassword")
let loginButton = document.getElementById("loginButton")

register.appendChild(registerEmailText)
register.appendChild(registerPasswordText)
register.appendChild(registerButton)

login.appendChild(loginEmailText)
login.appendChild(loginPasswordText)
login.appendChild(loginButton)

registerButton.addEventListener("click", () => {
    let email = registerEmailText.value
    let password = registerPasswordText.value
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        console.log(error.code)
        console.log(error.message)
    })
})

loginButton.addEventListener("click", () => {
    let email = loginEmailText.value
    let password = loginPasswordText.value
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        console.log(error.code)
        console.log(error.message)
    })
})

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location = "index.html"
    } else {
        console.log("logged out")
    }
})
  