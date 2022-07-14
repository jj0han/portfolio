//logo
let i = 0;
const logo = document.querySelector(".logo") 

document.addEventListener("DOMContentLoaded", function typeW() {
    nome = "<João Bomfim/>"
    vel = Math.floor(Math.random()*150) + 50
    setTimeout(typeW, vel)
    logo.innerHTML += nome.charAt(i)
    i++
})

//menu
const botao = document.querySelector("[data-button]")
const menu = document.querySelector(".menu__lista")

botao.addEventListener("click", function() {
    console.log("cnwon")
    if(!menu.style.display || menu.style.display == "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
})