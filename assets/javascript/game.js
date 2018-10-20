var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guess = 0;
var keyChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userChoice = "";
var yourGuesses = [];
var isDuplicate = false; 

document.onkeyup = function game () {
   
    var userChoice = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log("User type:", userChoice);

     var letter = keyChoices[Math.floor(Math.random()* keyChoices.length )];
     console.log("computer", letter);

 
     if (userChoice == keyChoices || userChoice == letter) {
         wins++;
         guessesLeft = 9;
         guess = 0;
         yourGuesses = [];
    } else {
     guess++;
     yourGuesses.push(userChoice);
    }

    if(userChoice !== keyChoices || userGuess !== letter) {
        for (var i = 0; i < 10; i++) {
            var guessesLeft = i - guess;
            
        }
    }
    if (guessesLeft < 0){
    
        guessesLeft = 9;
        guess = 0;
        losses++;
        yourGuesses = [];
    }
        

    var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + guessesLeft + "</p>" +
			"<p>Your Guesses so far: " + yourGuesses.join(", ") + "</p>";

			document.querySelector("#game").innerHTML = html;
}
