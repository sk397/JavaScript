
//Sub Classes in JS


// First we create a class, like we have created below - the book class

class book {
    constructor(title, year, author){
        this.title = title,
        this.year = year,
        this.author = author
    }

    getSummary () {
        return `Title: ${this.title}, Year: ${this.year}, Author: ${this.author}`
    }
}

// Creating the Magzine sub class from the Book class

class Magazine extends book {
    constructor(title, year, author, month) {
    super(title, year, author)
    this.month = month
    }
    
    getMonth() {
        return `The Maganize was published on ${this.month} 2024`
    }
}

// Instantite the Magazine object

const Magazine1 = new Magazine ("Mag1", "2010", "Hari", "Feb")

console.log(Magazine1);
console.log(Magazine1.getMonth());

// We can also access the getSummary method form the book class in the magaznie sub class 
console.log(Magazine1.getSummary());