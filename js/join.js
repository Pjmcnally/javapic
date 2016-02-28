function load(){
	// Should these all be 1 line commands or is 2 lines more clear?
	// If I make them one line they slightly exceed the 80 char limit. Problem?
	var form = document.getElementById("signup");
	form.noValidate = true;

	var submit = document.getElementById("submit");
	submit.addEventListener("click", verifyAll);

	var nameInput = document.querySelector("[name=name]");
	nameInput.addEventListener("blur", verifyInput);

	var username = document.querySelector("[name=username]");
	username.addEventListener("blur", verifyInput);

	var email = document.querySelector("[name=email]");
	email.addEventListener("blur", verifyEmail);
}

function verifyAll() {
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

function verifyInput() {
	if (this.value){
		setValid(this);
	} else {
		setInvalid(this);
	}
}

/*
function verifyName() {
	if (nameInput.value){
		setValid(this);
		return true;
	} else {
		setInvalid(this);
		return false;
	}
}

function verifyUsername() {
	if (username.value){
		setValid(this);
		return true;
	} else {
		setInvalid(this);
		return false;
	}
}
*/

function verifyEmail() {
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
	var text = (/\w+:/).exec(label.innerHTML)[0];
	var warn = document.getElementById("warning");

	elem.className = "invalid";
	label.innerHTML = "* " + text;
	label.className = "invalid";
	warn.style.display = "block";
}

function setValid(elem){
	var label = elem.previousSibling.previousSibling;
	var text = (/\w+:/).exec(label.innerHTML)[0];

	elem.className = "valid";
	label.className = "valid";
	label.innerHTML = "&#10004;  "+ text;

	if (checkAll().length === 0){
		var warn = document.getElementById("warning");
		warn.style.display = "none";
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