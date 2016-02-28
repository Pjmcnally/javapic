function load(){
	document.getElementById("signup").noValidate = true;
	document.getElementById("submit").addEventListener("click", verAll);
	document.querySelector("[name=name]").addEventListener("blur", verInpt);
	document.querySelector("[name=username]").addEventListener("blur", verInpt);
	document.querySelector("[name=email]").addEventListener("blur", verEmail);
}

function verAll() {
	event.preventDefault();
	invalid = checkAll();

	if (invalid.length === 0) {
		console.log("Your Verified");
	} else {
		for (var i = 0; i < invalid.length; i++) {
			setInvalid(invalid[i]);
		}
	}
}

function verInpt() {
	if (this.value){
		setValid(this);
	} else {
		setInvalid(this);
	}
}

/*
function verName() {
	if (nameInput.value){
		setValid(this);
	} else {
		setInvalid(this);
	}
}

function verUser() {
	if (username.value){
		setValid(this);
	} else {
		setInvalid(this);
	}
}
*/

function verEmail() {
	var emailTest = /^[^@\s]+@[\w\d]+.[\w\d]+$/;

	if (emailTest.test(this.value)){
		setValid(this);
		return true;
	} else {
		setInvalid(this);
		return false;
	}
}

function setInvalid(elem){
	var label = elem.previousSibling.previousSibling;

	elem.className = "invalid";
	label.innerHTML = "* " + (/\w+:/).exec(label.innerHTML)[0];
	label.className = "invalid";

	document.getElementById("warning").style.display = "block";
}

function setValid(elem){
	var label = elem.previousSibling.previousSibling;

	elem.className = "valid";
	label.className = "valid";
	label.innerHTML = "&#10004;  "+ (/\w+:/).exec(label.innerHTML)[0];

	if (checkAll().length === 0){
		document.getElementById("warning").style.display = "none";
	}
}

function checkAll(){
	var invalid = [];
	var all = document.getElementsByTagName("input");

	for (var i = 0; i < all.length - 1; i++){
		if (all[i].className != "valid"){
			invalid.push(all[i]);
		}
	}
	return invalid;
}

window.onload = load;