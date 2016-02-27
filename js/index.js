window.onload = rotate;

function rotate() {
	var jumbotron = document.getElementById("jumbotron");
	var imageNum = 0;  // Number to track current picture.
	var imageMax = 60;  // Total number of pictures.
	var delay = 10;  // Delay between picture rotation.  Set in seconds.

	function change() {
		imageNum = buildNum(imageNum, imageMax);
		var source = buildSrc(imageNum);

		checkImage(source);
	}

	function checkImage(src) {
		var img = document.createElement("img");
		img.onload = function() {
			jumbotron.style.backgroundImage = "url(" + src + ")";
		};
		img.onerror = change;
		img.src = src;
	}

	function buildSrc(num) {
		var head = 'images/pdxcg_';
		var tail = '.jpg';

		return head + num + tail;
	}

	function buildNum(num, max) {
		num = (num % max) + 1;
		if (num < 10) {
			num = "0" + num;
		}

		return num;
	}

	setInterval(change, delay * 1000);
}
