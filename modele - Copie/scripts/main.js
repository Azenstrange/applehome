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



// XXX: Header_Responsive

const header_fixed_button_responsive = document.querySelector('header_fixed_button_responsive')
const header_fixed_links = document.querySelector('header_fixed_menu ul li')

header_fixed_button_responsive.addEventListener(
  'click',
  function(){
    header_fixed_links.classList.toggle('header_fixed.is-visible')
  }
)
