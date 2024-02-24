
// Quiz Game
// Const data type cannot be changed
// Let or Var can be chnaged

const prompt = require('prompt-sync')()

// let value = prompt("Enter something: ");
// console.log(value)

console.log("Welcome to the computer hardware quiz!")
const totalQuestions  = 3

// Having a counter to check how many answer are correct
let correctAnswers = 0;


// Quiz question


const answer1 = prompt("What is the brain of the computer?")
const correctAnswer1 = "CPU"

if (answer1.toUpperCase() === correctAnswer1){
    console.log("You got this correct");
    correctAnswers++
} else {
    console.log ("This is incorrect, please try again");
}


const answer2 = prompt("What is the capital of of INDIA?")
const correctAnswer2 = "DELHI"

if (answer2.toUpperCase() === correctAnswer2){
    console.log("You got this correct");
    correctAnswers++
} else {
    console.log ("This is incorrect, please try again");
}


const answer3 = prompt("What is the best pizza place?")
const correctAnswer3 = "DOMINOS"

if (answer3.toUpperCase() === correctAnswer3) {
    console.log("You are correct");
    correctAnswers++
} else {
    console.log ("This is incorrect");

}

// To give the user the percentage of correct answers
const percent = Math.round (( correctAnswers / totalQuestions ) * 100)


console.log("You got", correctAnswers, "questions correct")

// console.log("You got", percent, "% correct answers")

// Converting percentage to string and concatnating the percent to it
console.log("You got", percent.toString() + "%")




