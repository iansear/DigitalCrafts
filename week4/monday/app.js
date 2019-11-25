//get button using id
let greetingButton = document.getElementById('greeting')
let textbox = document.getElementById('textbox')
let ulist = document.getElementById('ul')

//attach onclick event to greetingButton with annon funct
greetingButton.addEventListener('click', function () {
  //console.log("HITTT!!!")
  //document.body.style.backgroundColor = 'blue'
  //console.log(textbox.value)

  //populate UL with ulis
  let liItem = document.createElement('li')
  liItem.innerHTML = textbox.value
  //console.log(liItem)
  let rmbutton = document.createElement('button')
  rmbutton.innerHTML = "Remove"
  liItem.appendChild(rmbutton)
  ulist.appendChild(liItem)
})
