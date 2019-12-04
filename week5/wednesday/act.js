async function getAllToDos() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos")
    let responseJson = response.json()
    let done = responseJson.filter((el) => el.completed == true)
    console.log(done)
}

getAllToDos()

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(response => response.json())
// .then(response => {
//     let done = response.filter((el) => el.completed == true)
//     console.log(done)
// })
