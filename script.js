// create popup for adding books to library
//blur body 
const blurContainer = document.querySelector('.container'); 
const popup = document.querySelector('.popup');
function openPopup() {
    popup.classList.add('show');
    blurContainer.classList.add('blur')
}

// close button 
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal())

//function to close modal
function closeModal() {
    popup.classList.remove('show'); 
    blurContainer.classList.remove('blur'); 

}



// create library array
let myLibrary = [
{title: 'Temple of the Golden Pavilion', 
 author: 'Yukio Mishima', 
 pages: 239,
 read: false
}

]; 
console.log(myLibrary); 
// book function
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
    }
}

//create submit form action 
const submit = document.querySelector('form').addEventListener('submit', (event) => {
event.preventDefault(); 
addBookToLibrary(); 
updateLocalStorage(); 
console.log(localStorage); 
closeModal(); 
})


// add form contents to library 
function addBookToLibrary()  {
// create variables for form inputs 
const titleInput = document.querySelector('#title').value; 
const authorInput = document.querySelector('#author').value; 
const pagesInput = document.querySelector('#pages').value; 
// input for 'read', create function to change output value of 'read' or 'not read'; 
function changeToBoolean(input) {  return input.value === 'Yes' ? true : false; }; 
const readInput = changeToBoolean(document.querySelector('#read').value); 


 let newBook = new Book(titleInput, authorInput, pagesInput, readInput); 
 myLibrary.push(newBook);
 console.log(myLibrary);
 updateLocalStorage(); 
 renderAndDisplay(newBook); 


}
// function for updating local storage contents 
function updateLocalStorage() {
    localStorage.setItem('library', JSON.stringify(myLibrary)); 
}
// stop removal of objects on refresh 
function restoreLocalStorage() {
   if (localStorage.getItem('library')) {
    let object = JSON.parse(localStorage.getItem('library')); 
    myLibrary = object; 
    console.log(myLibrary);

   }

}



// render library contents to cards in HTML DOM 
function renderAndDisplay(book) {

    const libraryDisplay = document.querySelector('.cards-grid'); 
 
    if (myLibrary.length < 5) {
        //create card
        const card = document.createElement('div'); 
        libraryDisplay.appendChild(card); 
        card.classList.add('card'); 
        
        // create divs
        const cardTitleDiv = document.createElement('div'); 
        const cardAuthorDiv = document.createElement('div'); 
        const cardPagesDiv = document.createElement('div'); 
        const cardReadDiv = document.createElement('div'); 
        
        // set div id's
        cardTitleDiv.setAttribute('id','card-title'); 
        cardAuthorDiv.setAttribute('id','card-author'); 
        cardPagesDiv.setAttribute('id', 'card-pages'); 
        cardReadDiv.setAttribute('id', 'card-read'); 
        // create div text spans
        const titleText = document.createElement('span'); 
        const authorText = document.createElement('span'); 
        const pagesText = document.createElement('span'); 

        //set div text span id's
        titleText.setAttribute('id', 'card-title-text'); 
        authorText.setAttribute('id','author-text'); 
        pagesText.setAttribute('id', 'pages-text'); 

       // set div text span text content
        titleText.textContent = 'Book\r\n Title: ' 
        authorText.textContent = 'Author: '
        pagesText.textContent = 'Pages:'
        cardReadDiv.textContent = changeReadContent(book.read); 
        

        // edit and delete buttons
        const editBtn = document.createElement('button')
        const deleteBtn = document.createElement('button'); 
        // edit and delete button images and  image id's
        const editImg = document.createElement('img'); 
        const deleteImg = document.createElement('img'); 
        editImg.setAttribute('id','change-read-img'); 
        deleteImg.setAttribute('id','delete-book-img'); 
        editImg.src = 'icons/edit-svgrepo-com.svg'; 
        deleteImg.src = 'icons/delete-svgrepo-com.svg'; 
        // edit and delete button id's and append images 
        editBtn.classList.add('change-read'); 
        deleteBtn.classList.add('delete-book'); 
        
        editBtn.appendChild(editImg); 
        deleteBtn.appendChild(deleteImg); 

        // append all div's to card
        card.appendChild(cardTitleDiv); 
        card.appendChild(cardAuthorDiv); 
        card.appendChild(cardPagesDiv); 
        card.appendChild(cardReadDiv); 
        card.appendChild(editBtn); 
        card.appendChild(deleteBtn); 
        // append all div text to div's
        cardTitleDiv.appendChild(titleText); 
        cardAuthorDiv.appendChild(authorText); 
        cardPagesDiv.appendChild(pagesText); 

        // create variables for text values
        const titleTextValue = document.createElement('span'); 
        const authorTextValue = document.createElement('span'); 
        const pagesTextValue = document.createElement('span'); 


        //append values to title divs
        cardTitleDiv.appendChild(titleTextValue); 
        cardAuthorDiv.appendChild(authorTextValue); 
        cardPagesDiv.appendChild(pagesTextValue);

        // set content of values
        titleTextValue.textContent = book.title; 
        authorTextValue.textContent = book.author;
        pagesTextValue.textContent = book.pages; 
        
        // event listeners delete button
     
        deleteBtn.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(book), 1); 
            updateLocalStorage(); 
            console.log(myLibrary)
            card.remove(); 
        })
        // event listener for edit buttons 
        
        editBtn.addEventListener('click', () => {
            if(book.read === false) {
                book.read = true; 
                updateLocalStorage(); 
                cardReadDiv.textContent = 'Read'
                console.log(myLibrary)
            } else if (book.read === true) {
                book.read = false; 
                updateLocalStorage(); 
                cardReadDiv.textContent = 'Not Read'
                console.log(myLibrary)
            }
        })
      
    } else return; 
 } 

// call function to render and display all contents of myLibrary

// function to change read input booleans to 'read' or 'not read' 
function changeReadContent(input) {
    return input ? 'Read' : 'Not Read' 
}


// document content load event listener 
document.addEventListener('DOMContentLoaded', () => {
    restoreLocalStorage(); 
    console.log(localStorage)
    function renderAll() {
        for(let i = 0; i < myLibrary.length; i++) {
         renderAndDisplay(myLibrary[i])
        }
     }
     renderAll(); 
      





  
        
    
})