//Menu 
const btnMenu = document.getElementById('btn-menu')
const containerLinks = document.querySelector('.nav-links')
let contadores = {
    cntNav: false,
    cntCarrusel: true
}

btnMenu.addEventListener('click', () =>{
    if(contadores.cntNav){
        containerLinks.style.marginRight = '-110%'
        contadores.cntNav = false
    }
    else{
        containerLinks.style.marginRight = '0'
        contadores.cntNav = true
    }
})

//carrusel mis servicios
let tamañoPantalla = window.screen.width;
const carrusel = document.getElementById("mov");
let cards = document.getElementsByClassName("uwu");

function derecha() {
  if (tamañoPantalla < 768) {
    let cardFirst = document.getElementsByClassName("uwu")[0];
    carrusel.style.marginLeft = "-10%";
    carrusel.style.transition = "all 0.5s ease-in-out";
    setTimeout(function () {
      carrusel.insertAdjacentElement("beforeend", cardFirst);
      carrusel.style.marginLeft = "-1%";
    }, 500);
  }
}

setInterval(() => {
  derecha();
}, 2000);


//carrusel mis mi portafolio
const cajaPorta = document.querySelector(".carruselPorta");
let cardsPorta = document.querySelectorAll(".tarao");

function carruselPorta() {
  if (tamañoPantalla < 768) {
    let cardFirstPorta = document.querySelectorAll(".tarao")[0];
    cajaPorta.style.marginLeft = "-65%";
    cajaPorta.style.transition = "all 0.5s ease-in-out";
    setTimeout(function () {
      cajaPorta.style.transition = "none";
      cajaPorta.insertAdjacentElement("beforeend", cardFirstPorta);
      cajaPorta.style.marginLeft = "-65%";
    }, 500);
  }
}

setInterval(function () {
  carruselPorta();
}, 2000);