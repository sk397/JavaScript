// Oject Literals in JS
// this refers to the varibales inside the object

const book1 = {
  name: "Book1",
  Year: "2010",
  author: "Hari",

  getSummary: function () {
    return `The name of the book is ${this.name}, the year it was published was ${this.Year} and it is written by the author ${this.author}`;
  },
};

console.log(book1.name);
console.log(book1.Year);
console.log(book1.author);

console.log(book1.getSummary());


const book2 = {
    name: "Book2",
    Year: "2011",
    author: "Sai",
  
    getSummary: function () {
      return `The name of the book is ${this.name}, the year it was published was ${this.Year} and it is written by the author ${this.author}`;
    },
  };

  console.log(book2.getSummary());

  // We can also get the key or values of the book in as an array

  console.log(Object.values(book2));
  console.log(Object.keys(book2));
  