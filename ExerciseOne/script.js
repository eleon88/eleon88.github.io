var button = document.getElementById("add-item");
var input = document.getElementById("item-input");
var eList = document.querySelectorAll("ul")[0];
var lList = document.querySelectorAll("ul")[1];
var items = document.querySelector("li");
var eChecked = document.getElementById("eric");
var lChecked = document.getElementById("laura");


function addClassToListItems(event){
	if(event.target.tagName === "LI"){
		event.target.classList.toggle("done");
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
  var x = document.createElement("i");
  var y = document.createElement("i");
	li.appendChild(document.createTextNode(input.value));
  x.classList.add("far", "fa-times-circle");
  li.appendChild(x);
  y.classList.add("far", "fa-check-circle");
  li.appendChild(y);
  input.value = "";
  if(eChecked.checked){
    eList.appendChild(li);
  } else if (lChecked.checked) {
    lList.appendChild(li);
  }
  deleteParentNodeOnClick()
  toggleSelected()
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteParentNodeOnClick() {
  var deleteButton = document.getElementsByClassName("fa-times-circle");
  for (var i = 0; i < deleteButton.length; i++) {
      deleteButton[i].addEventListener("click", deleteNodeOnClick);
  }
}

function deleteNodeOnClick(e) {
    var trash = document.querySelectorAll("i");
    for (var ind = 0; ind < trash.length; ind++) {
        this.parentNode.remove();
    }
}

function toggleSelected(event){
	if(event.target.tagName === "I"){
		event.target.parentNode.classList.toggle("selected");
	}
}

lList.addEventListener("click", addClassToListItems);
eList.addEventListener("click", addClassToListItems);
lList.addEventListener("click", toggleSelected);
eList.addEventListener("click", toggleSelected);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
deleteParentNodeOnClick();
