// XXX: head_Responsive
const head_fixed_button_responsive = document.querySelector(".head_fixed_button_responsive")
const head_fixed_links = document.querySelectorAll(".head_fixed_menu li")


head_fixed_button_responsive.addEventListener(
  'click',
  function(){
    console.log('pl')
    for (var i = 0; i < head_fixed_links.length; i++) {
      head_fixed_links[i].classList.toggle("head_fixed_is-visible")
    }
    if (head_fixed_button_responsive.classList.contains("is-open")){
      head_fixed_button_responsive.classList.toggle("is-open")
    }
    else
    head_fixed_button_responsive.classList.toggle("is-open")
  }
)
