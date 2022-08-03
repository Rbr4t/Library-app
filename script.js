let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read

    this.info = function(){
        return `${title} was by ${author}, the book consists of ${pages} pages, ${read}`;
    };
}



function addBookToLibrary() {

}

// addBookToLibrary() 


function displayBooks(){
  const books = document.querySelector('.readBooks'); //container div

  //we create a new book card
  const newBook = document.createElement('div'); 

  const newBookh1 =  document.createElement('h1'); //h1 header
  const h1 = document.createTextNode('Title')
  newBookh1.appendChild(h1)
  newBook.appendChild(newBookh1)

  const newBookAuth = document.createElement('h2'); //h2 author nameplate
  const auth = document.createTextNode('Author');
  newBookAuth.appendChild(auth);
  newBook.appendChild(newBookAuth);

  const newBookPages = document.createElement('p'); // paragraph element
  const pages = document.createTextNode('pages');
  newBookPages.appendChild(pages);
  newBook.appendChild(newBookPages)

  const newBookRead = document.createElement('button'); //button element
  newBookRead.textContent = 'Already read?';
  newBook.appendChild(newBookRead)

  newBook.classList.add('book');
  books.appendChild(newBook);
}



// Add eventlistener to the button, so if it's clicked, form will show up.
const addBook = document.querySelector('.addBook');
addBook.addEventListener('click', ()=>{
  const form = document.getElementById('form');
  console.log(form.style.display)
  if (form.style.display === 'none' || form.style.display === '') {
    // 👇️ this SHOWS the form
    form.style.display = 'flex'
    form.style.flexDirection = 'column';
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'none';
  }
})