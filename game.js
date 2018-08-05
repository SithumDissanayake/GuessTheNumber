/*
// I am committed to being a person of integrity.
// This project is submitted as part of the assessment for Year 8 IST.
// This is all my own work. I have referenced any work used from other
// sources and have not plagiarised the work of others.
// (signed) **** Sithum Dissanayake ****
// I have attempted all the extension tasks
*/
function dropdown() {
    document.getElementById("dropdownList").classList.toggle("show");
}

window.onclick = function(event) {
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

var upperLimit = 10;

function beginner(choice) {
    upperLimit = choice;
}
function intermediate(choice) {
    upperLimit = choice;
}
function hard(choice) {
    upperLimit = choice;
}
function game() {
    var bottomLimit = 1;
    var randomNumber = Math.floor(Math.random() * (upperLimit - bottomLimit + 1)) + bottomLimit;
    var playerAttempts = 0;
    var allUserGuesses = [];
    var guessedBefore = false;
    while (true) {
        var userGuess = prompt("Enter Your Guess:");
        if (userGuess == null) {
            break;
        }
        if (isFinite(userGuess) && userGuess != "") {
            playerAttempts++;
            userGuess = +userGuess;
            for (i = 0; i < allUserGuesses.length; i++) {
                if (allUserGuesses[i] == userGuess) {
                    alert("You have guessed this number before. Please try a different number");
                    guessedBefore = true;
                }
            }
            if (guessedBefore == false) {
                if (userGuess < bottomLimit) {
                    alert("Your guess should be no less than " + bottomLimit);
                } else if (userGuess > upperLimit) {
                    alert("Your guess should be no greater than " + upperLimit);
                } else if (userGuess > randomNumber) {
                    alert("Your guess is too high");
                    allUserGuesses.push(userGuess);
                } else if (userGuess < randomNumber) {
                    alert("Your guess is too low");
                    allUserGuesses.push(userGuess);
                } else {
                    alert("Congratulations, you guessed the number in " + playerAttempts + " guesses!");
                    break;
                }
            }
            guessedBefore = false;
        } else {
            alert("Please enter a number");
        }
    }
}

