//Menu
let title = document.createElement('h1')
let homebutton = document.createElement('a')
let articlebutton = document.createElement('a')
let navbar = document.createElement('div')

title.innerHTML = "HighOnCoding"

homebutton.innerHTML = "Home"
homebutton.href = ""

articlebutton.innerHTML = "Articles"
articlebutton.href = ""

navbar.className = "navbar"
navbar.appendChild(title)
navbar.appendChild(homebutton)
navbar.appendChild(articlebutton)

document.body.appendChild(navbar)

//Grey Text Block
let greyblock = document.createElement("div")
let greyheader = document.createElement("h1")
let greytext = document.createElement("p")
let greybutton = document.createElement("button")

greyheader.innerHTML = "The Curse of the Current Reviews"
greytext.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."
greybutton.innerHTML = "Read more"

greyblock.className = "greyblock"
greyblock.appendChild(greyheader)
greyblock.appendChild(greytext)
greyblock.appendChild(greybutton)

document.body.appendChild(greyblock)

//Review Text Block
let reviewblock1 = document.createElement("div")
let revheader1 = document.createElement("h3")
let revtext1 = document.createElement("p")

revheader1.innerHTML = "Hello WatchKit"
revtext1.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."

reviewblock1.className = "review"
reviewblock1.appendChild(revheader1)
reviewblock1.appendChild(revtext1)

document.body.appendChild(reviewblock1)
