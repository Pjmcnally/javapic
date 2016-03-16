/* Main function to animate carousel.  */
function carousel() {
	var nums = [];  // List to hold nums for pictures.
	var imageMax = 120;  // Total number of pictures.
	var delay = 7;  // Delay between picture rotation.  Set in seconds.

	var jumbotron = document.getElementById("jumbotron");

	/* Sets onload and onerror functions to handle whether pictures loads.
	 * If picture loads the jumbotron element will be changed to that picture
	 * if not the next picture will be tried.
	 */
	function buildImage(src) {
		var img = document.createElement("img");
		img.onload = function() {
			jumbotron.style.backgroundImage = "url(" + src + ")";
		};
		img.onerror = change;
		img.src = src;
	}

	/* Adds leading "0" to image number when necessary */
	function checkNum(num) {
		num = (num < 10) ? "0" + num : num;
		return num;
	}

	/* Function to build a simple array of numbers.  */
	function buildArray(){
		var numbers = [];

		for (var i = 1; i <= imageMax; i++){
			numbers.push(i);
		}

		return numbers;
	}


	/* Selects and removes random element from array.  Builds picture src based
	 * on that element and tries to load that picture.  If Array is empty array
	 * is rebuilt.
	 */
	function change() {
		if (nums.length === 0){
			nums = buildArray();
		}

		var randomElem = Math.floor(Math.random() * nums.length);
		var imageNum = checkNum(nums.splice(randomElem, 1));
		var source = 'images/pdxcg_' + imageNum + '.jpg';

		buildImage(source);
	}

	setInterval(change, delay * 1000);
}

window.onload = carousel;
