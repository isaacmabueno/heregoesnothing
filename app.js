var allColors = ["black", "blue", "yellow", "green", "red", "orange"];

var randomized =  allColors.slice(0).sort(function() {
  return .5 - Math.random();
});

var solution = randomized.slice(0, 4) //what the hell was i thinking?//

function score(button) {
	var guess = [];
	var tr = button.parentNode.parentNode;
	for(var i=0; i < tr.childNodes.length; i++) {
		var td = tr.childNodes[i];
		var firstChild = td.childNodes[0];

		if (firstChild != undefined) {
			if (firstChild.tagName == "SELECT") {
				var selectBox = firstChild;
				var selection = selectBox.options[selectBox.selectedIndex].value;
				guess.push(selection);	
			}
		}
	}

	var result = "";
	var remainingGuessesAfterX = [];
	var remainingGuessesAfterY = [];

	for(var i=0; i < solution.length; i++) {
		if (solution[i] == guess[i]) {
			result = result.concat("X");
		} else {
			remainingGuessesAfterX.push(guess[i]);
		}
	}

	for(var i=0; i < remainingGuessesAfterX.length; i++) {
		var found = false;
		for(var j=0; j < solution.length; j++) {
			if (solution[j] == remainingGuessesAfterX[i]) {
				result = result.concat("Y");
				found = true;
				break
			}
		}
		if (!found) {
			remainingGuessesAfterY.push(remainingGuessesAfterX[i]);
		}
	}

	for(var i=0; i < remainingGuessesAfterY.length; i++) {
		result = result.concat("0");
	}

	var resultTd = tr.childNodes[tr.childNodes.length - 1];
	resultTd.textContent = result;

	if (result == "XXXX") {
		alert("Hey, you just won!");
	}
}