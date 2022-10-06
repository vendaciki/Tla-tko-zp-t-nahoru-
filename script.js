// Získání tlačítko
let mybutton = document.getElementById("myBtn");

// Když se uživatel posune dolů o 800 pixelů od horní části dokumentu, zobrazte tlačítko
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Když uživatel klikne na tlačítko, přejde na začátek dokumentu
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}