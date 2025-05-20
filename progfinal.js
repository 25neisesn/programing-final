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

    }

}