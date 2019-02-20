const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const slider = document.querySelector('.sliderContainer')
const sliderdeux = document.querySelector('.sliderContainer2')
const sliderImages = document.querySelectorAll('.sliderContainer img')
const sliderImageseux = document.querySelectorAll('.sliderContainer2 img')
const step = 480 // definit le décalage
let pos = 0 // définit la position en cours.
let action


function setPosition(pos)
{
  slider.style.left = -pos*step+'px'
  sliderdeux.style.left = -pos*step+'px' // 960px
}







// BOUTON DE NAVIGATION

for (i=1; i<6; i++){
const bullet = document.createElement('li')
bullet.classList.add('bullet')
document.querySelector('ul').appendChild(bullet)
}

let bullet = document.querySelector('ul').children

// let bullet = document.querySelectorAll('li')

for(let i = 0; i< bullet.length; i++){
  bullet[i].addEventListener(
    'click',
    function (){
      pos = i;
      setPosition(pos)
  }
)
}
