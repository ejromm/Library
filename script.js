// create popup for adding books to library
//blur body 
const blurContainer = document.querySelector('.container')
const popup = document.querySelector('.popup');
function openPopup() {
    popup.classList.add('show');
    blurContainer.classList.add('blur')
    

}
// close button 
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function() {
    popup.classList.remove('show');
    blurContainer.classList.remove('blur')
})









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