// JavaScript Document
console.log("test");


//codepen van hamburger menu gebruikt als inspiratie https://codepen.io/tomvanderputten/pen/RwzmZgJ
var openButton = document.querySelector(".hamburgericoon")

var deNav = document.querySelector("header nav ul")

openButton.onclick = function() {
    deNav.classList.toggle("toonMenu")
}