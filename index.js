import {song} from './song.js';

/* --------------------------------------------------------- */

// Create <h1><small>auteur -</small> Titre de la chanson</h1>

const $h1 = document.createElement("h1");
const $small = document.createElement("small");
const $header = document.getElementById("header");
$small.textContent = song.auteur +" - ";
$h1.textContent = song.titre;

$header.prepend($h1);
$h1.prepend($small);

// Create a div with the class .lyrics .
// Add the verses, enclosed in paragraphs <p>
const $main = document.getElementById("container");
const $lyrics = document.createElement("div");
$lyrics.setAttribute("class", "lyrics");
$main.appendChild($lyrics);
const $contenus = song.paroles;

for(let i = 0; i < $contenus.length; i ++){
  
  const contenu = $contenus[i].contenu;
  const $paragraphes = document.createElement("p");
  $lyrics.appendChild($paragraphes);
  $paragraphes.innerHTML = contenu.join("<br>");

  if($contenus[i].type === "choeur"){
    $paragraphes.setAttribute("class", "choeur");
  }

}

// Create a content for footer
const $footer = document.getElementById("footer");
let dateNow = new Date();
let year = dateNow.getFullYear(); 
$footer.textContent = "© Copyright "+ year + " - IUT | This is an exercice for CodingGame for a course on Javascript & DOM"

// Get the box "masquer les paroles"
const checkboxLyrics = document.getElementById("masquer-lyrics");
const displayLyrics = document.getElementById("display-lyrics");

const divLyrics = document.querySelector(".lyrics");

// Attach a function to the event "click" on checkboxLyrics
checkboxLyrics.addEventListener("click",  event => {

  if (event.target.checked) {
    
    divLyrics.style.display = "none";
    displayLyrics.textContent = "Afficher les paroles";
    
  } else {
    
    divLyrics.style.display = "unset";
    displayLyrics.textContent = "Masquer les paroles";
  }

});