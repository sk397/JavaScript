// The ES6 makes it easier than the previous concepts on ES5

//Here we create JS Class, called book

class book {
    constructor(title, year, author){
        this.title = title,
        this.year = year,
        this.author = author
     
    }

// Below we create our method function

getSummary(){
    return `Name: ${this.title}, Year: ${this.year}, Author: ${this.author} `
}

getAge(){
    const years = new Date().getFullYear() - this.year
    return `This book is ${years} years old`
}

revise (newYear){
    this.year = newYear,
    this.revise = true;
    return `The age of the book is updates to ${newYear}`
}


// A static method, where we do not have to give any parameters
static topBookStore () {
    return `[Barnes & Noble], [Amazon]`
}
}

const book1 = new book ("Hi1234", "2001", "Sai")

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge())
console.log(book.topBookStore());


console.log(book1.revise(2010));
console.log(book1.getAge())

