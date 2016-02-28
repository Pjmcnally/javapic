function load(){
	form = document.getElementById("signup");
	form.noValidate = true;

	submit = document.getElementById("submit");
	submit.addEventListener("click", verifyAll);

	nameInput = document.querySelector("[name=name]");
	nameInput.addEventListener("blur", verifyInput);

	username = document.querySelector("[name=username]");
	username.addEventListener("blur", verifyInput);

	email = document.querySelector("[name=email]");
	email.addEventListener("blur", verifyInput);
}

window.onload = load;

function verifyAll() {
	event.preventDefault();
	all = document.getElementsByTagName("input");
	verified = true;
	for (var i = 0; i < all.length - 1; i++){
		if (all[i].className != "valid"){
			setInvalid(all[i]);
			verified = false;
		}
	}
	if (verified) {
		console.log("Your verified");
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

function verifyEmail() {
	if (email.value){
		setValid(this);
		return true;
	} else {
		setInvalid(this);
		return false;
	}
}
*/

function verifyInput() {
	if (this.value){
		setValid(this);
		return true;
	} else {
		setInvalid(this);
		return false;
	}
}


function setInvalid(elem){
	elem.className = "invalid";
	
	var label = elem.previousSibling.previousSibling;
	var text = (/\w+/).exec(label.innerHTML)[0];
	
	label.innerHTML = text + " *";
	label.className = "invalid";
}

function setValid(elem){
	elem.className = "valid";

	var label = elem.previousSibling.previousSibling;
	var text = (/\w+/).exec(label.innerHTML)[0];
	
	label.className = "valid";
	label.innerHTML = text;
}