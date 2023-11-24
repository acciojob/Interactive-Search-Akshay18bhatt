//your JS code here. If required.
let wrapper= document.getElementById("wrapper");
let button =document.querySelector("button");
let input= document.querySelector("input");
button.addEventListener("click", btnClicked);
function btnClicked() {
	wrapper.style.backgroundColor = "red";
	input.focus();
	
}