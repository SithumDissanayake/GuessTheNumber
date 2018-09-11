/*
	// I am committed to being a person of integrity.
	// This project is submitted as part of the assessment for Year 8 IST.
	// This is all my own work. I have referenced any work used from other
	// sources and have not plagiarised the work of others.
	// (signed) Sithum Dissanayake 
	// I have attempted all the extension tasks
	*/

//The dropdown button is clicked
function dropdown() {
	//Checks the HTML for the id dropdownList and toggles the classList to show
	document.getElementById("dropdownList").classList.toggle("show");
}
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

//Sets the default value of the upperLimit to 10, or beginner.
var upperLimit = 10;
//Sets mainbtn to the element with the ID b1
var mainbtn = document.getElementById("b1");
//Changes difficulty depending on the button clicked
function difficulty(choice, difficulty, text) {
	//Creates a variable named colorToAdd
	var colorToAdd;
	//Creates a variable named colorsToRemove and sets it to an empty array
	var colorsToRemove = []
	//Checks if difficulty equals 0
	if (difficulty == 0) {
		//Sets colorToAdd to "dropbtnbeginner"
		colorToAdd = "dropbtnbeginner"
		//Sets colorsToRemove to ["dropbtnintermediate", "dropbtnhard"]
		colorsToRemove = ["dropbtnintermediate", "dropbtnhard"]
	}
	//Checks if difficulty equals 1
	else if (difficulty == 1) {
		//Sets colorToAdd to "dropbtnintermediate"
		colorToAdd = "dropbtnintermediate"
		//Sets colorsToRemove to ["dropbtnhard", "dropbtnbeginner"]
		colorsToRemove = ["dropbtnhard", "dropbtnbeginner"]
	} else {
		//Sets colorToAdd to "dropbtnhard"
		colorToAdd = "dropbtnhard"
		//Sets colorsToRemove to ["dropbtnintermediate", "dropbtnbeginner"]
		colorsToRemove = ["dropbtnintermediate", "dropbtnbeginner"]
	}
	//Sets upperLimit to choice and adds 1 
	upperLimit = choice++;
	//Replaces the content in mainbtn
	mainbtn.innerHTML = "<strong>Select Difficulty</strong><br/>Difficulty Selected:<br/> " + text;
	//Removes classes from mainbtm
	mainbtn.classList.remove(colorsToRemove[0], colorsToRemove[1]);
	//Adds classes from colorToAdd
	mainbtn.classList.add(colorToAdd);
}

//Starts the game when the button is clicked
function game() {
	//Creates a variable named randomNumber and sets it to a randomnumber
	var randomNumber = Math.floor(Math.random() * upperLimit) + 1;
	//Creates a variable named playerAttempts and sets it to 1
	var playerAttempts = 1;
	//Creates a variable named allUserGuesses and sets it to an empty array
	var allUserGuesses = [];
	//Creates a variable named guessedBefore and sets it to false
	var guessedBefore = false;
	//Starts a while loop that keeps looping as long as it is true
	while (true) {
		//Creates a variable named userGuess and sets it the number the user guesses 
		var userGuess = prompt("Enter Your Guess (1-" + upperLimit + "):");
		//Checks if userGuess equals null
		if (userGuess == null) {
			//Stops the function
			break;
		}
		//Checks if userGuess is finite and if userGuess does not equal nothing
		if (isFinite(userGuess) && userGuess != "") {
			userGuess = +userGuess;
			//This loops through the array untill every number is checked
			for (i = 0; i < allUserGuesses.length; i++) {
				//Checks if the number in the array,allUserGuesses, equals userGuess  
				if (allUserGuesses[i] == userGuess) {
					//Alerts the user that they have guessed the number before
					alert("You have guessed this number before. Please try a different number");
					//Sets guessedBefore to true
					guessedBefore = true;
				}
			}
			//Checks if guessedBefore equals false
			if (guessedBefore == false) {
				//Checks if the userGuess is below 1
				if (userGuess < 1) {
					//Alerts the user that the number they chose should not be less than 1
					alert("Your guess should be no less than 1");
				}
				//Checks if userGuess is more the upperLimit
				else if (userGuess > upperLimit) {
					//Alerts the user that the number they chose should not be more than the upperLimit
					alert("Your guess should be no greater than " + upperLimit);
				}
				//Checks if userGuess is more than randomNumber
				else if (userGuess > randomNumber) {
					//Alerts user that their guess is too high
					alert("Your guess is too high");
					//Increases playerAttempts by 1
					playerAttempts++;
					//Pushes the userGuess to array allUserGuesses
					allUserGuesses.push(userGuess);
				}
				//Checks if userGuess is less than randomNumber
				else if (userGuess < randomNumber) {
					//Alerts user that their guess is too low
					alert("Your guess is too low");
					//Increases playerAttempts by 1
					playerAttempts++;
					//Pushes the userGuess to array allUserGuesses
					allUserGuesses.push(userGuess);
				} else {
					//Checks if playerAttempts equals 1
					if (playerAttempts == 1) {
						//Alerts user that they guessed the number in 1 guess
						alert("Congratulations, you guessed the number in 1 guess!");
						//Stops the function
						break;
					} else {
						//Alerts user that they guessed the number in playerAttempts
						alert("Congratulations, you guessed the number in " + playerAttempts + " guesses!");
						//Stops the function
						break;
					}
				}
			}
			//Sets guessedBefore to false
			guessedBefore = false;
		} else {
			//Alerts user to enter a number
			alert("Please enter a number");
		}
	}
}
