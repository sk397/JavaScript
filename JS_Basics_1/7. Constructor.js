// Creating Constructor functions [These are blueprint of a object/fucntion that can be re-used]

function book (title, year, author) {
    this.title = title
    this.year = year
    this.author = author

    this.getSummary = function () {
        return `This name of the book is ${this.title}, it was published in ${this.year} and author of this book is ${this.author}`
    }
}

const book1 = new book ("Hello", 2002, "Hari")
const book2 = new book ("Hi", 2004, "Sai")

console.log(book1.getSummary());
console.log(book2.getSummary());