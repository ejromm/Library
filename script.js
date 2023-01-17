// create popup for adding books to library
//blur body 
const container = document.querySelector(".container");
const popup = document.querySelector('.popup');
function openPopup() {
    popup.classList.toggle('show');
    

}










// create library array
let myLibrary = []; 

// book function
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

// add book function
function addBookToLibrary() {
}