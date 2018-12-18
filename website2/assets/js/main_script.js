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
  console.log(ezLoader.children[0].classList.contains("Gianni"));
  if (ezLoader.children[0].classList.contains("Gianni")){
    setTimeout(function() {
      ezLoader.children[0].classList.toggle("Gianni");
    }, 500);
  } else {
    ezLoader.children[0].classList.toggle("Gianni");
  }

}


function addToToDo(){
  var toDoListItem = document.createElement("li");
  toDoListItem.classList.add("toDoListItem");
  var toDoListItemClose = document.createElement("span");
  var toDoInput = document.querySelector(".inputToDo").value;
  toDoListItem.innerHTML = toDoInput;
  toDoListItemClose.innerHTML = "\u00D7";
  var theToDoList = document.querySelector(".toDoList");
  toDoListItemClose.addEventListener("click", function(){
    event.target.parentElement.remove(event.target.parentElement);
  });
  toDoListItem.appendChild(toDoListItemClose);
  theToDoList.appendChild(toDoListItem);

}

function checkToDo(){
  if (this.target.tagName === 'LI') {
    this.target.classList.toggle('checked');
  }
}

var addToDoBtn = document.querySelector(".addToDoBtn");
addToDoBtn.addEventListener ('click', addToToDo);


function checkToDo(event){
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}
var list = document.querySelector('.toDoList');
list.addEventListener('click', checkToDo);
var listItems = document.getElementsByClassName("toDoListItem");
for(let i = 0; i < listItems; i++){
  listItems[i].children[0].addEventListener
}
