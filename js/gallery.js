window.onload = main;

function main() {
	// Capture gallery element and add event listener
	var gallery = document.getElementById("gallery");
	gallery.addEventListener("click", show);

	// Capture imgShow element and add event listener
	var imgShow = document.getElementById("image_show");
	imgShow.addEventListener("click", hide);

	// Fill gallery element with pictures.
	populate();

	// Blow out picture on click
	function show() {
		if (event.target.className === "picture") {
	        imgShow.className = "display_img";
	        imgShow.firstChild.src = event.target.src;
	    }
	    else if (event.target.nodeName === "LI") {
	        imgShow.className = "display_img";
	        imgShow.firstChild.src = event.target.firstChild.src;
	    }
	}

	// Hide picture on click away
	function hide() {
		if (event.target != imgShow.firstChild) {
	        imgShow.className = "display_none";
	    }
	}
}

// Populates the gallery with images.
function populate(){
	var imageMax = 60;  // Total number of pictures.

	var list = document.createElement("ul");
	gallery.appendChild(list);

	for (var i = 1; i <= imageMax; i++){
		num = checkNum(i);

		img = document.createElement("img");
		img.onerror = remove;
		img.className = "picture";
		img.src = buildSrc(num);

		li = document.createElement("li");
		li.appendChild(img);

		list.appendChild(li);
	}

	// Remove picture from list (if image doesn't load)
	function remove(){
		list.removeChild(this.parentNode);
	}

	// Concatenates image source 
	function buildSrc(num) {
		var head = 'images/pdxcg_';
		var tail = '.jpg';

		return head + num + tail;
	}

	// Adds leading "0" when necessary
	function checkNum(num) {
		if (num < 10) {
			num = "0" + num;
		}

		return num;
	}
}
