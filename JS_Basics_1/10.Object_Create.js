//Object of Prototypes

const bookProtos = {
    getSummary: function (){
        return `Title: ${this.title}, Year ${this.year}, Author ${this.author}`
    },

    getAge: function () {
        const years = new Date().getFullYear() - this.year
        return `This book is ${years}, old.`
    }
}


// const book1 = Object.create(bookProtos)
// book1.title = "Hello",
// book1.year = 2002,
// book1.author = "Sai"
// console.log(book1);

const book1 = Object.create(bookProtos, {
title: {value: 'Book one'},
Year: {value: 2002},
Author: {value: 'Sai'},

});

console.log(book1.getSummary());
console.log(book1.getAge());
