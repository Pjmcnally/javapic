function main() {
	// Add event listeners to gallery and image_show 
	document.getElementById("gallery").addEventListener("click", show);
	document.getElementById("image_show").addEventListener("click", hide);

	// Fill gallery element with pictures.
	populate();

	// put name in tagline (if name exists);
	name();
}

// Activate lightbox with picture on click
function show(event) {
	var imgShow = document.getElementById("image_show");

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
function hide(event) {
	var imgShow = document.getElementById("image_show");
	
	if (event.target != imgShow.firstChild) {
        imgShow.className = "display_none";
    }
}

// Pulls name from web address and adds it to tagline.
function name() {
	if (location.search) {
	    document.querySelector("span.tagline").innerHTML = 
	    	"develop something beautiful, " + 
	    	location.search.slice(1).replace(/%20/g, " ") + 
	    	"!";
	}
}

// Populates the gallery with images.
function populate(){
	var imageMax = 60;  // Total number of pictures.

	var list = document.createElement("ul");
	document.getElementById("gallery").appendChild(list);

	for (var i = 1; i <= imageMax; i++){
		var num = checkNum(i);

		var img = document.createElement("img");
		img.onerror = remove;
		img.className = "picture";
		img.src = 'images/pdxcg_' + num + '.jpg';

		var li = document.createElement("li");
		li.appendChild(img);

		list.appendChild(li);
	}

	// Remove picture from list (if image doesn't load)
	function remove(){
		document.querySelector("UL").removeChild(this.parentNode);
	}

	// Adds leading "0" when necessary
	function checkNum(num) {
		if (num < 10) {
			num = "0" + num;
		}

		return num;
	}
}

window.onload = main;
