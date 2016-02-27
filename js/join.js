function load(){
	form = document.getElementById("signup");
	form.noValidate = true;

	submit = document.getElementById("submit");
	submit.addEventListener("click", verifyAll);

	nameInput = document.querySelector("[name=name]");
	nameInput.addEventListener("blur", verifyName);

	username = document.querySelector("[name=username]");
	username.addEventListener("blur", verifyUsername);

	email = document.querySelector("[name=email]");
	email.addEventListener("blur", verifyEmail);
}

window.onload = load;

function verifyAll() {
	event.preventDefault();
	name = verifyName();
	user = verifyUsername();
	email = verifyEmail();

	if (name && user && email) {
		console.log("Your verified");
	}
}

function verifyName() {
	label = nameInput.previousSibling.previousSibling;
	text = "name";

	if (!nameInput.value){
		nameInput.className = "invalid";
		label.style.color = "red";
		label.innerHTML = text + " *";
		return false;
	}
	label.style.color = "black";
	label.innerHTML = text;
	nameInput.classList.remove("invalid");
	return true;
}

function verifyUsername() {
	label = username.previousSibling.previousSibling;
	text = "username";

	if (!username.value){
		username.className = "invalid";
		label.style.color = "red";
		label.innerHTML = text + " *";
		return false;
	}
	label.style.color = "black";
	label.innerHTML = text;
	username.classList.remove("invalid");
	return true;
}

function verifyEmail() {
	label = email.previousSibling.previousSibling;
	text = "email";

	if (!email.value){
		email.className = "invalid";
		label.style.color = "red";
		label.innerHTML = text + " *";
		return false;
	}
	label.style.color = "black";
	label.innerHTML = text;
	email.classList.remove("invalid");
	return true;
}