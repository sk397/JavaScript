// Inheritance 



// Constructor function
const book = function (title, year, author){
    this.title = title;
    this.year = year;
    this.author = author;
}

//GetSummary Prototype function for the above constructor

book.prototype.getSummary = function () {

    return `Name of book ${this.title}, Year ${this.year}, Author ${this.author}`
}


// We will create a new object called Magazine
// Magazine Constuctor 
// we are using the book.call() fucntion to inherit the paramerts of book to magazine

const Magazine = function (title, year, author, month){
    book.call(this, title, year,author)
    this.month = month
}

// We can either create a new protoype fucntion for Magazine or 
// If we also want to use/ inherit the getSummary protoype fucntion from the book, we can do so by

Magazine.prototype = Object.create(book.prototype)

mag1 = new Magazine ("A1", 2002,"Sai", "Feb")

// In the console if we log the mag1 object, we see that it uses the book constructor [It only has the title, year and author]
// But if you want to use the Magzine constructor, we can do so by
Magazine.prototype.constructor = Magazine;
// Now if we log mag1, we can all the parameters including the one we had for the magzine which is the month.


console.log(mag1);
console.log(mag1.getSummary());


