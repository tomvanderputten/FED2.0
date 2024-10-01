/* bron: mijn eigen codepen opdracht van de hamburger menu */
var openButton = document.querySelector("header > button:nth-of-type(2)")

openButton.onclick = openMenu

function openMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}






var sluitButton = document.querySelector("nav button:nth-of-type(2)")

sluitButton.onclick = sluitMenu

function sluitMenu(){
  var deNav = document.querySelector("nav")
  deNav.classList.remove("toonMenu")
}

