
var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

//var easyButton = document.querySelector("#easyBtn");
//var hardButton = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");


init();


function init () {
	setupModeButtons();
	setupSquares();
	reset();
}


function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (var i=0; i < squares.length; i++) {

		// Add click listeners:
		squares[i].addEventListener("click", function () {
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;

			// compare color to picked square
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	colors = generateRandomColors(numSquares);

	// pick new color from array
	pickedColor = pickColor();

	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
	

	// change colors on page

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];

		}
		else {
			squares[i].style.display = "none";
		}
		
	}

}


resetButton.addEventListener("click", function () {
	reset();
});




function generateRandomColors(num) {
	// make array
	var arr = [];

	// add num random colors to arr
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor());
	}

	// return array
	return arr;
}

function randomColor() {
	// pick red from 0 - 255
	var r = Math.floor(Math.random() * 256);

	// pick green from 0-255
	var g = Math.floor(Math.random() * 256);

	// pick blue 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor() {
	// pick random number (0-6)
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeColors(color) {
	// loop through all squares to match given color
	for (var i=0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}
