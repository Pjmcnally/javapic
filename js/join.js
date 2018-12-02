function load(){
	// Add event listeners for form fields and set noValidate
	form = document.getElementById("signup");
	form.noValidate = true;
	form.addEventListener("submit", verAll);

	// The verify functions work on an elem.  I use event.target to pass it in.
	form.name.addEventListener("blur", function() {verName(event.target);});
	form.username.addEventListener("blur", function() {verUser(event.target);});
	form.email.addEventListener("blur", function() {verEmail(event.target);});
}

// Tests if all fields have been verified.  If yes redirects if not warns user.
function verAll(event) {
	event.preventDefault();

    if (document.activeElement.id == "skip") {
        window.location.href = "gallery.html?Guest";
    } else {
	verName(document.querySelector("[name=name]"));
	verUser(document.querySelector("[name=username]"));
	verEmail(document.querySelector("[name=email]"));

	if (checkAll()) {
		window.location.href = "gallery.html?" +
			document.querySelector("[name=name]").value;
	}
}
}

// Tests for a name entry
function verName(elem) {
	if (elem.value){
		setValid(elem);
	} else {
		setInvalid(elem);
	}
}

// Tests for a valid username (entry that does not posses any spaces)
function verUser(elem) {
	if (/^[^\s]+$/.test(elem.value)){
		setValid(elem);
	} else if (/\s/.test(elem.value)){
		setInvalid(elem, " (no spaces)");
	} else {
		setInvalid(elem);
	}
}

// Tests for a valid looking email address
function verEmail(elem) {
	// regex to text for valid email
	if (/^[^@\s]+@[\w\d]+.[\w\d]+$/.test(elem.value)){
		setValid(elem);
	} else {
		setInvalid(elem);
	}
}

// Adds invalid class to elems and modifies text as warning.
function setInvalid(elem, message){
	var label = elem.previousSibling.previousSibling;
	message = message || "";

	elem.className = "invalid";
	label.innerHTML = "* " + (/\w+:/).exec(label.innerHTML)[0] + message;
	label.className = "invalid";

	document.getElementById("warning").style.display = "block";
}

// Adds valid class to elems and (if necessary) hides warning text.
function setValid(elem){
	var label = elem.previousSibling.previousSibling;

	elem.className = "valid";
	label.className = "valid";
	label.innerHTML = "&#10004;  "+ (/\w+:/).exec(label.innerHTML)[0];

	if (checkAll()){
		document.getElementById("warning").style.display = "none";
	}
}

// Checks all input elems flags.  Returns list of any elems that are invalid.
function checkAll(){
	var all = document.getElementsByTagName("input");

	// -1 removes submit button from list to check.
	for (var i = 0; i < all.length - 1; i++){
		if (all[i].className != "valid"){
			return false;
		}
	}
	return true;
}

window.onload = load;
