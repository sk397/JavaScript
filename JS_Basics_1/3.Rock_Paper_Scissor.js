const prompt = require("prompt-sync")();

//Rock Paper Scissor Game

// Define the Results

let wins = 0
let loss = 0
let draw = 0



while (true) {


//Lets us get the player input
const playerChoice = prompt("Enter Rock, Paper or Scissors or enter q to quit the game: ")

if (playerChoice.toLowerCase() === "q") {
    break;
}

if (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors")
{
  console.log("Enter the correct value");
  continue;

} 


// Adding the available values in an array
const Choices = ["Rock","Paper","Scissors"]

// Letting the computer to choose the value from the Array Index
const ChoiceIndex = Math.round(Math.random() * 2)
// console.log(ChoiceIndex);

//Getting the Random Computer Input by selecting the index of the array
const computerChoice = (Choices[ChoiceIndex])
//console.log(computerChoice);

//Now we have to compare the Player Input and computer input

if (playerChoice === computerChoice) {
    console.log("This is a Draw");
    draw++

} else if (
         (playerChoice === "Paper" && computerChoice === "Rock") ||
         (playerChoice === "Rock" && computerChoice === "Scissors") ||
         (playerChoice === "Scissors" && computerChoice === "paper")) 
         {
            console.log("This is a win");
            wins++
         }
else {
console.log("This is a loss");
loss++
}


}

console.log("Your Wins:",  wins, "Looses:", loss, "Draws:", draw);

