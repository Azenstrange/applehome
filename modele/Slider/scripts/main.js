// faire un slider
const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const slider = document.querySelector('.sliderInformation')
const sliderImages = document.querySelectorAll('.sliderInformation img')
const step = 674 // définit le décalage
let pos = 0 //définit la séléction en cours
let action
playSlider()

leftButton.addEventListener('click',slideLeft)
function slideLeft(){
  pos--
  if(pos<0){
    pos=sliderImages.length-1
  }
  setPosition(pos)
}

rightButton.addEventListener('click',slideRight)
function slideRight(){
  pos++
  if(pos>=sliderImages.length){
    pos=0
  }
  setPosition(pos)
}

slider.addEventListener('mouseover', stopSlider)
slider.addEventListener('mouseout', playSlider)
leftButton.addEventListener('mouseover', stopSlider)
leftButton.addEventListener('mouseout', playSlider)
rightButton.addEventListener('mouseout', playSlider)
rightButton.addEventListener('mouseover', stopSlider)

function setPosition(pos){
  slider.style.left = -pos*step+'px' //960px
}

function stopSlider(){
  clearInterval(action)
}

function playSlider(){
  action = setInterval(
    function()
    {
      pos = (pos+1)%sliderImages.length
      console.log(pos)
      slider.style.left = -pos*step+'px' //960 px
    },
    3000 //toutes les 3 secondes
  )
}


//afficher des points sous les images
/* créer une nouvelle div dans le html mettre 6 li
puis faire une querySelectorAll avec addEventListener
sur chacun des elements ça créé des evenement
au click on */
