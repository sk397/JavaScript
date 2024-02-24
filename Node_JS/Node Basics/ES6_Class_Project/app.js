// Book Class : Represents a Book
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }
  




// UI CLass : Handle UI Tasks
class UI {
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach((book) => UI.addBookToList(book));
    }


    static addBookToList(book) {
        const list = document.querySelector('#book-list');
    
        const row = document.createElement('tr');
    
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
    
        list.appendChild(row);
      }

      

    //Creating a method for deleting the book // below if statement, we are seeing
    // of the class contains the delete keyword
    // since we have to remove the full book, we are using the parentElement twice, to target the innerHtml row of book
    // el passed here is referred to the element
    static deleteBook(el) {
        if(el.classList.contains('delete')) {
          el.parentElement.parentElement.remove();
        }
      }
    


    // Show Alert Message Method
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
    
      // Vanish in 3 sec
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }    


// Clear Feilds Logic

static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}







// Store Class : Handles Storage [Local Storage on Browser]
// We use Static, to call the method directly, we do not need instantiate the same

class Store {
    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
  
    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(isbn) {
      const books = Store.getBooks();
  
      books.forEach((book, index) => {
        if(book.isbn === isbn) {
          books.splice(index, 1);
        }
      });

   //reset the local storage once the book is removed
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
  









// Event: Display Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);



//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {

//Prevent actual Submit
    e.preventDefault()


    //Get from the values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
  


   // Validate if all the fields are filled or not
 if(title === "" || author ==="" || isbn === "") {
    // we are using the show Alert method to add the html, and danger is the bootstrap class to show msg in red
    UI.showAlert('Please fill in all fields', 'danger'); 
    // UI.showAlert('Please fill in all fields', 'success'); 
 } else {
    //Instasiate Book
    const book = new Book(title,author,isbn);
    // console.log(book); We can see this in the console when we add the book

    //Add Book to the UI
    UI.addBookToList(book);

    // Add book to storage
    Store.addBook(Book);

    // Show Success Msg
    UI.showAlert('Book Added', 'success')

    // Clear Fields
    UI.clearFields();
}
}
);



// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove book from UI
    UI.deleteBook(e.target);
  
    // Remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  
    // Show success message
    UI.showAlert('Book Removed', 'success');
  });
