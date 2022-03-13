// var h1 = document.getElementById("title")
// var h1 = document.getElementsByClassName("titlee")
// h1.innerHTML = "hello"
// var tag = document.getElementsByTagName("h1")[0].innerHTML = "hello"
// var q = document.querySelector("#title").innerHTML = "hello"
// var q = document.querySelector(".header").innerHTML = "hello class"
// var q = document.querySelector("p").innerHTML = "hello tag"
// var all = document.querySelectorAll('h1')[3].innerHTML = "hello"

// var h1 = document.getElementsByClassName("header")

// var q = document.querySelector("h1").innerHTML = "hello class me"



// **************** Event handler **************

// function myFunc() {
// document.getElementById('img').src = "./img/image1.png"
// document.getElementById('h1').innerHTML = "hello"
// document.getElementById('button').innerHTML = "my name is button khan"


// var css= document.getElementById('css')

// css.style.color = 'red'
// css.style.fontSize = '55px'

// }



// var divMama = document.getElementById('div')
// var title = document.getElementById('title')

// var intro1 = document.createElement("h1")
// intro1.innerHTML = "Hello Mama 1"

// divMama.appendChild(intro1)

// var intro2 = document.createElement("p")
// intro2.innerHTML = "Hello Mama 2"

// divMama.insertBefore( intro2,title)


// var q = document.querySelector("h1").classList.add('header')



// var div = document.getElementById("div")
// console.log(div.children[1])


// var div = document.getElementById("apple")
// console.log(div.parentElement)

// nextElementSibling
// previousElementSibling


var button  =document.getElementById("button")
button.addEventListener("click", function(){

    var name = document.getElementById("name")
    name.innerHTML = "Kabila Jele"
    name.style.color = "red"

    
})