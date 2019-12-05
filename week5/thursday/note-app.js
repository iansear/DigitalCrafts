let db = firebase.database()
let textTitle = document.getElementById("title")
let textBody = document.getElementById("body")
let goButt = document.getElementById("go")

let root = db.ref()

//Create Node
let postsRef = root.child("posts")

function setupObservers() {
    postsRef.on("value", (snapshot) => {
        let posts = []
        let snapshotValue = snapshot.val()
        for(let key in snapshotValue) {
            console.log(key)
            let post = snapshotValue[key]
            posts.push(post)
        }
        displayPosts(posts)
    })
}

function displayPosts(posts) {
    console.log(posts)
}

goButt.addEventListener("click", () => {
    let title = textTitle.value
    let body = textBody.value

    postsRef.push({
        title: title,
        body: body
    })
})

setupObservers()

//Create Uniqe ID
// postsRef.push({
//     title: "Hello",
//     body: "Text text text"
// })

// let usersRef = root.child("users")

// //Creates uniqe ID
// usersRef.push({
//     name: "Luis",
//     age: 30
// })

// usersRef.child("Alex").set({
//     name: "Alex",
//     age: 23
// })

// root.child("Task 1").set({
//     title: "My Title",
//     priority: "high"
// })

// console.log(db)
