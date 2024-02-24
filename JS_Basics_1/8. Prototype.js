// Prototype - We use this to segregrate the function from the object 
// Eg: In the 7. Constructor file, if we use the GetSummary function in the book object, when 
// doing console log we get the getsummary function also with the object
// but if we need to sperate it, we use a prototype.


// Constructor function
const book = function (title, year, author) {
    this.title = title,
    this.year = year,
    this.author = author
}

//Prototype 1 - GetSUmmary
book.prototype.getSummary = function () {
    return `This name of the book is ${this.title}, it was published in ${this.year} and author of this book is ${this.author}`

};

//Prototype 2 - Get The age of the book

book.prototype.GetAge = function (){
    const years = new Date().getFullYear() - this.year;
    return `This book is ${years} years old`
}

// Prototype 3 - Revsing/Updating the year of the book

book.prototype.revise = function(Newyear) {
    this.year = Newyear
    this.revise = true;
    return `This book is updated on ${Newyear}`
}


// Instatiating an object
const book1 = new book ("Dell", 2010, "Apple")
const book2 = new book ("Apple", 2011, "Dell")


// Console logging the prototype

console.log(book1.getSummary());
console.log(book2.GetAge());


console.log(book2.revise(2018))
console.log(book2.GetAge());