//Let us reference the object in this js file 


const School = require('./1.One');
const person = require ('./1.One')
console.log(person.name);


const School1 = new School ("Buffalo","USA", 20)

console.log(School1);
console.log(School1.SchoolRanking());

