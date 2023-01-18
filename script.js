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
let myLibrary = [
{title: 'Temple of the Golden Pavilion', 
 author: 'Yukio Mishima', 
 pages: 239,
 read: true
}

]; 

// book function
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
// variables for inputs
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const submitBtn = document.querySelector('#submit');

// function for getting read value
function getReadValue() {
    if(readInput.value === 'yes') {
        return true; 
    } else {
        return false;
    }
}




// add book function
function addBookToLibrary() {
 let title = titleInput.value; 
 let author = authorInput.value; 
 let pages = pagesInput.value; 
 let read = getReadValue(); 
 let newBook = new Book(title, author, pages, read);
 myLibrary.push(newBook); 

}
// submit button event listener  
submitBtn.addEventListener('click', function() {
 addBookToLibrary(); 
}); 

// populate screen with book 
