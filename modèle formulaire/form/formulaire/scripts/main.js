const buttonun  = document.querySelector(".suivant")
const buttondeux  = document.querySelector(".retour")
const formun = document.querySelectorAll(".container section")
let j = 0;


buttonun.addEventListener(
  'click',
  function(){
    if(j<formun.length-1){
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
      console.log(j)
      formun[j].classList.toggle("invisible");
      j--;
      console.log(j)
      formun[j].classList.toggle("invisible");
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
    body_slider_01.style.display='none'
    body_slider_02.style.display='inline-block'
    }
)

body_slider_color_selector_white.addEventListener(
  'click',
  function(){
    body_slider_02.style.display='none'
    body_slider_01.style.display='inline-block'
  }
)
