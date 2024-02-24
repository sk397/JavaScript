// Random number guesser game
// == checks the value is equak or not
// === checks the data type as well

const prompt = require('prompt-sync')();

//Generating a random number between 10 and 100
const target = 10 + Math.round(Math.random() * 90);
console.log(target)

//We need to know how many times the user has taken to guess the number
let guesses = 0;


// So we use while loop
// While(true) - this means continue the loop until we manully break out of the statement.
// we are adding the guesss++ to record the number of tries the user takes.
// Using the Number keyword to ask the user a number


while(true) {
    let guess = Number(prompt("Please enter a number between (1-100) "))
    guesses++
    if (guess > target) {
        console.log("Your guess is high");
    } else if (guess < target) {
        console.log("Your guess it low");
    }  else {
        console.log("Your guess is right");
        break;
    }
}

console.log("You took " + guesses + " Number of tries to get it correct!");


