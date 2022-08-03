let myLibrary = [];

/*
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read

    // this.info = function(){
    //     return `${title} was by ${author}, the book consists of ${pages} pages, ${read}`;
    // };
}
*/




function displayBooks(){
    // console.log([myLibrary])
    let lastBook = myLibrary[myLibrary.length-1]
    console.log("HI")
    console.log(lastBook)

    const books = document.querySelector('.readBooks'); //container div

    //we create a new book card
    const newBook = document.createElement('div'); 

    const newBookh1 =  document.createElement('h1'); //h1 header
    const h1 = document.createTextNode(lastBook.get('title'))
    newBookh1.appendChild(h1)
    newBook.appendChild(newBookh1)

    const newBookAuth = document.createElement('h2'); //h2 author nameplate
    const auth = document.createTextNode(lastBook.get('author'));
    newBookAuth.appendChild(auth);
    newBook.appendChild(newBookAuth);

    const newBookPages = document.createElement('p'); // paragraph element
    const pages = document.createTextNode(lastBook.get('pages'));
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
    form.style.display = 'flex';
    
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'none';
  }
})



//eventlistener for the submit button, when activated adds new card to the stack.
const submit = document.querySelector('.submit');
submit.addEventListener('click', function(e){
    const form = document.querySelector('form');
    const data = new FormData(form);
    myLibrary.push(data)
    
    
    displayBooks()
})
