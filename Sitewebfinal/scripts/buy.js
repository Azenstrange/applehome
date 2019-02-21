const buttonun  = document.querySelector(".suivant")
const buttondeux  = document.querySelector(".retour")
const formun = document.querySelectorAll(".container div[class^=form")
const panier  = document.querySelector(".ajouter_au_panier")
const buttonfin = document.querySelector(".finaliser")
let j = 0;

panier.addEventListener(
  'click',
  function() {
    if(j<formun.length-1){
      buttonun.classList.toggle("invisible");
      buttondeux.classList.toggle("invisible");
      panier.classList.toggle("invisible");
      formun[j].classList.toggle("invisible");
      j++;
      console.log(j)
      formun[j].classList.toggle("invisible");
    }
  }
)
buttonun.addEventListener(
  'click',
  function(){
    if(j<formun.length-1){
      if (j>=formun.length-3) {
        buttonfin.classList.toggle("invisible");
        buttonun.classList.toggle("invisible");
      }
      console.log(j)
      formun[j].classList.toggle("invisible");
      j++;
      console.log(j)
      formun[j].classList.toggle("invisible");
    }
  }
)
buttondeux.addEventListener(
  'click',
  function(){
    if(j>0){
      if (j<=1) {
        buttonun.classList.toggle("invisible");
        buttondeux.classList.toggle("invisible");;
        panier.classList.toggle("invisible");
      }
      if (j>=formun.length-2) {
        buttonfin.classList.toggle("invisible");
        buttonun.classList.toggle("invisible");
      }
      console.log(j)
      formun[j].classList.toggle("invisible");
      j--;
      console.log(j)
      formun[j].classList.toggle("invisible");
    }
  }
)
buttonfin.addEventListener(
  'click',
  function(){
    buttondeux.classList.toggle("invisible");
    buttonfin.classList.toggle("invisible");
    formun[j].classList.toggle("invisible");
    j++;
    console.log(j)
    formun[j].classList.toggle("invisible");
    if (buttonun.classList.contain("invisible")) {
          buttonun.classList.toggle("invisible");
    }
  }
)




const body_slider_01 = document.querySelector('.body_slider_01')
const body_slider_02 = document.querySelector('.body_slider_02')
const body_slider_color_selector_white = document.querySelector('.body_slider_color_selector_white')
const body_slider_color_selector_grey = document.querySelector('.body_slider_color_selector_grey')

body_slider_color_selector_grey.addEventListener(
  'click',
  function(){
      body_slider_01.classList.remove('body_slider_fadeout')
      body_slider_01.classList.remove('body_slider_fadein')
      body_slider_02.classList.remove('body_slider_fadeout')
      body_slider_02.classList.remove('body_slider_fadein')
      body_slider_01.classList.add('body_slider_fadeout')
      body_slider_02.classList.add('body_slider_fadein')
    }
)

body_slider_color_selector_white.addEventListener(
  'click',
  function(){
    body_slider_01.classList.remove('body_slider_fadeout')
    body_slider_01.classList.remove('body_slider_fadein')
    body_slider_02.classList.remove('body_slider_fadeout')
    body_slider_02.classList.remove('body_slider_fadein')
    body_slider_02.classList.add('body_slider_fadeout')
    body_slider_01.classList.add('body_slider_fadein')
  }
)
