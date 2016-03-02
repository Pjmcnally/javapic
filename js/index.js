function carousel() {
	var nums = [];
	var imageMax = 132;  // Total number of pictures.
	var delay = 7;  // Delay between picture rotation.  Set in seconds.

	function randomPic() {
		var randomNum = Math.floor(Math.random() * imageMax);
		var source = 'images/pdxcg_' + randomNum + '.jpg';
		buildImage(source);
	}

	// Sets onload and onerror functions to handle whether pictures loads
	function buildImage(src) {
		var jumbotron = document.getElementById("jumbotron");

		var img = document.createElement("img");
		img.onload = function() {
			jumbotron.style.backgroundImage = "url(" + src + ")";
		};
		img.onerror = change;
		img.src = src;
	}

	// Adds leading "0" to image number when necessary
	function checkNum(num) {
		num = (num < 10) ? "0" + num : num;
		return num;
	}

	function buildArray(){
		var numbers = [];

		for (var i = 1; i <= imageMax; i++){
			numbers.push(i);
		}

		return numbers;
	}


	// Changes picture displayed on page
	function change() {
		if (nums.length === 0){
			nums = buildArray();
			console.log(nums);
		}

		var randomElem = Math.floor(Math.random() * nums.length);
		var imageNum = checkNum(nums.splice(randomElem, 1));
		var source = 'images/pdxcg_' + imageNum + '.jpg';

		buildImage(source);
	}

	randomPic();
	setInterval(change, delay * 1000);
}

window.onload = carousel;
