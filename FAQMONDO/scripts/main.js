let list = document.querySelectorAll("li");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
    for (var j = 0; j < list.length; j++) {
      if((list[j].classList.contains("is-open"))&&(j!=i))
      {
      list[j].classList.toggle("is-open");
      }
    }
      this.classList.toggle("is-open");

  });
}
