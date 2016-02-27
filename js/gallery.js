window.onload = function() {
	var gallery = document.getElementById("gallery");
	var imgShow = document.getElementById("image_show");
	populate();

	// Event listener to enlarge a picture if clicked on.
	gallery.addEventListener("click", function(){
	    if (event.target.className === "picture") {
	        imgShow.className = "display_img";
	        imgShow.firstChild.src = event.target.src;
	    }
	});

	// Event listener to dismiss enlarged picture if clicked away from.
	imgShow.addEventListener("click", function(){
	    if (event.target != imgShow.firstChild) {
	        imgShow.className = "display_none";
	    }
	});
};

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

	function remove(){
		list.removeChild(this.parentNode);
	}

	function buildSrc(num) {
		var head = 'images/pdxcg_';
		var tail = '.jpg';

		return head + num + tail;
	}

	function checkNum(num) {
		if (num < 10) {
			num = "0" + num;
		}

		return num;
	}
}
