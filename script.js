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
 read: false
}

]; 

// book function
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
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

// create first card  
const card = document.createElement('div');
document.querySelector('.cards-grid').appendChild(card);
card.classList.add('card'); 
const placeHoldTitle = myLibrary[0].title; 
const placeHoldAuthor = myLibrary[0].author;
const placeHoldPages = myLibrary[0].pages;
function checkIfRead() {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].read == true) {
            return 'Read';
        } else {
            return 'Not Read'
        }
    }
}
const placeHoldRead = checkIfRead(); 
card.innerHTML = `<div id="card-title"><span id=card-title-text>Book</br> Title: </span>${placeHoldTitle}</div>
<div class="" id="card-author"><span id=author-text>Author: </span> ${placeHoldAuthor}</div>
<div id="card-pages"><span id=pages-text>Pages: </span>${placeHoldPages}</div>
<div id="card-read">${placeHoldRead}</div>
<button class="change-read"><img src="icons/edit-svgrepo-com.svg" alt="" id="change-read-img"></button>
<button class="delete-book"><img src="icons/delete-svgrepo-com.svg" alt="" id="delete-book-img"></button>`; 

