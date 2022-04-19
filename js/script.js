//Menu 
const btnMenu = document.getElementById('btn-menu')
const containerLinks = document.querySelector('.nav-links')
let tamañoPantalla = window.screen.width;
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
        containerLinks.style.marginRight = '-2%'
        contadores.cntNav = true
    }
})

//menu links
const btnNavLink = document.getElementsByClassName('btn-nav')

for(let i = 0; i < btnNavLink.length; i++){
  btnNavLink[i].addEventListener('click', function(){
    var seleccionado = document.getElementsByClassName('active')
    seleccionado[0].className = seleccionado[0].className.replace(" active")
    this.className += " active"
  })
}

//carrusel mis servicios
const carrusel = document.getElementById("mov");
let cards = document.getElementsByClassName("uwu");

function derecha() {
  if (tamañoPantalla < 768) {
    let cardFirst = document.getElementsByClassName("uwu")[0];
    carrusel.style.marginLeft = "-73%";
    carrusel.style.transition = "all 0.5s ease-in-out";
    setTimeout(function () {
      carrusel.style.transition = "none";
      carrusel.insertAdjacentElement("beforeend", cardFirst);
      carrusel.style.marginLeft = "0";
    }, 500);
  }
}

setInterval(() => {
  derecha();
}, 3000);


//carrusel mis mi portafolio
const cajaPorta = document.querySelector(".carruselPorta");
let cardsPorta = document.querySelectorAll(".tarao");

function carruselPorta() {
  if (tamañoPantalla < 768) {
    let cardFirstPorta = document.querySelectorAll(".tarao")[0];
    cajaPorta.style.marginLeft = "-68%";
    cajaPorta.style.transition = "all 0.5s ease-in-out";
    setTimeout(function () {
      cajaPorta.style.transition = "none";
      cajaPorta.insertAdjacentElement("beforeend", cardFirstPorta);
      cajaPorta.style.marginLeft = "0";
    }, 500);
  }
}

setInterval(function () {
  carruselPorta();
}, 3000);