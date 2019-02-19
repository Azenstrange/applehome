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
