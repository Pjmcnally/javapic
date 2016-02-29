function load(){
	document.getElementById("signup").noValidate = true;
	document.getElementById("submit").addEventListener("click", verAll);
	document.querySelector("[name=name]").addEventListener("blur", verInpt);
	document.querySelector("[name=username]").addEventListener("blur", verInpt);
	document.querySelector("[name=email]").addEventListener("blur", verEmail);
}

// Tests if all fields have been verified.  If yes redirects if not warns user.
function verAll(event) {
	event.preventDefault();
	var invalid = checkAll();

	if (invalid.length === 0) {
		window.location.href = "gallery.html?" + 
			document.querySelector("[name=name]").value;
	} else {
		for (var i = 0; i < invalid.length; i++) {
			setInvalid(invalid[i]);
		}
	}
}

// Tests for an entry that does not posses any spaces
function verInpt() {
	if (/^[^\s]+$/.test(this.value)){
		setValid(this);
	} else {
		setInvalid(this);
	}
}

// Tests for a valid looking email address
function verEmail() {
	var emailTest = /^[^@\s]+@[\w\d]+.[\w\d]+$/;

	if (emailTest.test(this.value)){
		setValid(this);
	} else {
		setInvalid(this);
	}
}

// Adds invalid class to elems and modifies text as warning.
function setInvalid(elem){
	var label = elem.previousSibling.previousSibling;

	elem.className = "invalid";
	label.innerHTML = "* " + (/\w+:/).exec(label.innerHTML)[0];
	label.className = "invalid";

	document.getElementById("warning").style.display = "block";
}

// Adds valid class to elems and (if necessary) hides warning text.
function setValid(elem){
	var label = elem.previousSibling.previousSibling;

	elem.className = "valid";
	label.className = "valid";
	label.innerHTML = "&#10004;  "+ (/\w+:/).exec(label.innerHTML)[0];

	if (checkAll().length === 0){
		document.getElementById("warning").style.display = "none";
	}
}

// Checks all input elems.  Returns list of any elems that are invalid.
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
