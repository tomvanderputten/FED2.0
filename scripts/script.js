/******************************/
/* menu openen de MENU button */
/******************************/

/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
var openButton = document.querySelector("header > button:nth-of-type(2)")

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.onclick = openMenu

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}




/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("nav button:nth-of-type(2)")

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu(){
  var deNav = document.querySelector("nav")
  deNav.classList.remove("toonMenu")
}

