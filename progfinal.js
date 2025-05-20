let scoreHistory = [] // stores number of guesses from each round 

function generateNumber() { // generates random number
    let randomDecimal = Math.random(); // generates a decimal from 0 to 0.99999
    let multipliedBy100 = randomDecimal * 100; // makes random number 0-99.9999
    let roundedDown = Math.floor(multipliedBy100); //makes number 0-99
    let finalNumber = roundedDown + 1; // makes number options 1-100
    return finalNumber; // returns final number
}