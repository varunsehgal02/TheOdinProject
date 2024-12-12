let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

function render() {
    let libraryEl = document.querySelector('#library');
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `
            <p>Title: ${book.title}</p>
         
            <p>Author: ${book.author}</p>   
       
            <p>Pages: ${book.pages}</p>
       
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
        
        `;
        bookEl.style.border = '1px solid black';
        bookEl.style.padding = '10px';
        bookEl.style.margin = '0px auto';
        bookEl.style.width = '200px';
        bookEl.style.backgroundColor = '#f2f2f2';
        bookEl.style.marginTop = '10px';
        libraryEl.appendChild(bookEl);
    }
}

let newBookbtn = document.querySelector('#Add-New-Book');
newBookbtn.addEventListener('click', function() {
    let BookForm = document.querySelector('#New-Book-Form');
    BookForm.style.display = "block";
});

document.querySelector('#New-Book-Form').addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary();
    this.style.display = "none"; // Hide the form after adding a book
});