window.onscroll = function() {stickyhead();};

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
});

var loader = document.querySelector(".load-btn");
var active2Elements = document.querySelectorAll(".active-2-element");
loader.addEventListener("click", function(){
     for(var activated = 0; activated < active2Elements.length; activated++){
          active2Elements[activated].classList.toggle("active");
     }
});

var ezLoader = document.querySelector(".ezLoader");
ezLoader.addEventListener('click', ezLoadStart);

function ezLoadStart(){
  ezLoader.children[0].classList.toggle("active");
}


function addToToDo(){
  var toDoListElement = document.createElement("li");
  toDoListElement.classList.add("toDoListItem");
  var toDoListElementClose = document.createElement("span");
  var toDoInput = document.querySelector(".inputToDo").value;
  console.log(toDoInput);
  toDoListElement.innerHTML = toDoInput;
  toDoListElementClose.innerHTML = "\u00D7";
  var theToDoList = document.querySelector(".toDoList");
  toDoListElement.appendChild(toDoListElementClose);
  theToDoList.appendChild(toDoListElement);

}

function checkToDo(){
  if (this.target.tagName === 'LI') {
    this.target.classList.toggle('checked');
  }
}

var addToDoBtn = document.querySelector(".addToDoBtn");
addToDoBtn.addEventListener ('click', addToToDo);

/*
function checkToDo(){
  if (this.target.tagName === 'LI') {
    this.target.classList.toggle('checked');
  }
}
var list = document.querySelector('.toDoList');
list.addEventListener('click', checkToDo, false);
*/
var list = document.querySelector('.toDoList');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

/*to use:
            innerHTML
            queryselector
            createElement("li")

            */
