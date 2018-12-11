window.onscroll = function() {stickyhead()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function stickyhead() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
menuToggle.addEventListener("click", function(){
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
})
