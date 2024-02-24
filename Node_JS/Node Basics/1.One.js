// First step is to initialize the Node packages, we do that by using   "npm init"
// Then we are installing Nodemon as a dev dependecy - so that we do not have to restart the server
// We use the command npm install -D nodemon
// We should delete the Node_modules when hosting the proejct and then do npm install when required again


//Creating a object 
const person  = {
    name: "John Doe",
    age: 30
}

module.exports = person;



// Creating a class

class School {
    constructor(city, country, ranking){
        this.city = city,
        this.country = country,
        this.ranking = ranking
    }

    SchoolRanking() {
         return `Joy school in the ${this.city} city, which is in ${this.country} country is ranked in at ${this.ranking} `
    }
}

module.exports = School;

// See 2.Two.js for next steps