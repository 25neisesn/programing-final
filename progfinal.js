let scoreHistory = [] // stores number of guesses from each round 

function generateNumber() { // generates random number
    let randomDecimal = Math.random(); // generates a decimal from 0 to 0.99999
    let multipliedBy100 = randomDecimal * 100; // makes random number 0-99.9999
    let roundedDown = Math.floor(multipliedBy100); //makes number 0-99
    let finalNumber = roundedDown + 1; // makes number options 1-100
    return finalNumber; // returns final number
}

function startNewGame() { // starts one round of the game
    let randomNumber = generateNumber(); // gives new number every round
    let guessedCorrectly = false; 
    let guessCount = 0; //tracks guesses per round

    alert("Guess the Number Game! Pick a Number 1-100"); // message to user
    while (guessedCorrectly === false) { //starts guessing loop
        let userInput = prompt("Enter Your Guess:"); // asks player for guess
        if (userInput === null) { // allows player to cancel the game
            alert("Game Cancelled");
            return;
        }

        let userGuess = Number(userInput); // makes input a number
        if (isNaN(userGuess)) { // I looked this up, NaN means not a number
            alert("Not a number. Please Enter a Number")
            continue; // goes to next loop
        }

        if (userGuess < 1 || userGuess > 100) { // makes it so numbers that are greater than 100 or less than 1 won't run
            alert("Please Enter a Number 1-100"); 
            continue;
        }

        guessCount = guessCount + 1; // makes guess count work
        if (userGuess === randomNumber) {
            alert ("Congrats! You Guessed the Number in"  +  guessCount  +  "guesses");
            guessedCorrectly = true; // stops game loop

            scoreHistory.push(guessCount); // adds number of guesses to score history
            let totalGuesses = 0;
            for (let i = 0; i < scoreHistory.length; i++) {
                totalGuesses = totalGuesses + scoreHistory[i];
            }

            let averageGuesses = totalGuesses / scoreHistory.length; // finds average guess rate
            let roundedAverage = averageGuesses.toFixed(1); // I looked up the .toFixed(1), it makes it so the number rounds to 1 decimal spot

            alert("Your Average Guesses Per Round:" + roundedAverage);

            let playAgain = prompt("Would You Like to Play Again? Type Yes or No:"); 

            if (playAgain !== null) { // cancels game
                playAgain = playAgain.toLowerCase();
            }

            if (playAgain === "yes" || playAgain === "y") { // allows you to play new game
                startNewGame(); // starts next game
            } else {
                alert("Thanks For Playing"); 
            }

        } else if (userGuess > randomNumber) { // finds if guessed number is too high
            alert("Guess Too High. Try Again");
        } else if (userGuess< randomNumber) {  // finds if guessed number is too low 
            alert("Guess Too Low. Try Again"); 
        }
        
        }
    }

startNewGame(); 