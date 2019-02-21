const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const slider = document.querySelector('.sliderContainer')
const sliderdeux = document.querySelector('.sliderContainer2')
const sliderImages = document.querySelectorAll('.sliderContainer img')
const sliderImageseux = document.querySelectorAll('.sliderContainer2 img')
const step = 404 // definit le décalage
let pos = 0 // définit la position en cours.
let action
playSlider()


slider.addEventListener('mouseover',stopSlider)
slider.addEventListener('mouseout',playSlider)
function setPosition(pos)
{
  slider.style.left = -pos*step+'px'
  sliderdeux.style.left = -pos*step+'px' // 960px
}



function stopSlider()
{
  clearInterval(action)
}


function playSlider()
{
  action = setInterval(
    function()
    {
      pos = (pos+1)%sliderImages.length
      setPosition(pos)
    },
    3000 // toutes les 3 secondes
  )
}


// BOUTON DE NAVIGATION

for (i=1; i<6; i++){
const bullet = document.createElement('li')
bullet.classList.add('bullet')
document.querySelector('.sliderdot').appendChild(bullet)
}

let bullet = document.querySelector('.sliderdot').children

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
