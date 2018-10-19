var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guess = 0;
var keyChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userChoice = "";
var yourGuesses = [];


document.onkeyup = function game () {
   
    var userChoice = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log("User type:", userChoice);

     var letter = keyChoices[Math.floor(Math.random()* keyChoices.length )];
     console.log("computer", letter);

 
     if (userChoice == keyChoices || userChoice == letter) {
         wins++;
         userChoice.push(yourGuesses);
    } else {
     guess++;
    }
    if(userChoice !== keyChoices || userGuess !== letter) {
        for (var i = 0; i < 11; i++) {
            var guessesLeft = i - guess;
            
        }
    }
    if (guessesLeft < 0){
    
        guessesLeft = 9;
        guess = 0;
        losses++;
        yourGuesses = [];
    }


document.getElementById("wins").innerHTML = "<p>Wins: " + wins + "</p>" 
document.getElementById("losses").innerHTML = "<p>Losses: " + losses + "</p>" 
document.getElementById("guessesLeft").innerHTML = "<p>Guesses Left: " + guessesLeft + "</p>" 
document.getElementById("yourGuesses").innerHTML = "<p>Your guesses so far: " + userChoice + "</p>" 


}
