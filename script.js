let myLibrary = [];
let idNum = 0;



function displayBooks(){
    
    let lastBook = myLibrary[myLibrary.length-1]

    const books = document.querySelector('.readBooks'); //container div

    //we create a new book card
    const newBook = document.createElement('div'); 
    const newBookdiv1 = document.createElement('div');
    const newBookh1 =  document.createElement('h1'); //h1 header
    const h1 = document.createTextNode(lastBook.get('title'))
    newBookh1.appendChild(h1)
    newBookdiv1.appendChild(newBookh1);

    const newBookAuth = document.createElement('h2'); //h2 author nameplate
    const auth = document.createTextNode(lastBook.get('author'));
    newBookAuth.appendChild(auth);
    newBookdiv1.appendChild(newBookAuth);

    const newBookPages = document.createElement('p'); // paragraph element
    const pages = document.createTextNode(lastBook.get('pages'));
    newBookPages.appendChild(pages);
    newBookdiv1.appendChild(newBookPages);
    newBook.appendChild(newBookdiv1);

    const newBookdiv2 = document.createElement('div');

    const newBookRead = document.createElement('button'); //button element
    newBookRead.textContent = 'Already read?';
    console.log(lastBook.get('read?')=='on')
    newBookRead.classList.add('readbutton')
    if (lastBook.get('read?')=='on'){
      newBookRead.classList.add('read')
    } else {
      newBookRead.classList.add('notread')
    }
    
    newBookdiv2.appendChild(newBookRead);

    const deleteButton = document.createElement('button'); //button element
    deleteButton.classList.add('delete')
    deleteButton.setAttribute('id', idNum)
    deleteButton.textContent = 'Delete';
    newBookdiv2.appendChild(deleteButton);
    newBookdiv2.classList.add('secondDiv')
    newBook.appendChild(newBookdiv2);

    newBook.setAttribute('id', idNum);
    idNum += 1;
    newBook.classList.add('book');
    books.appendChild(newBook);
    addEventLs()
    readingButtons()
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
    console.log([...data.entries()])
    if (![...data.values()].includes('')){
      form.reset()
      myLibrary.push(data)
      displayBooks()
    }
    
})



// add eventlistener to the delete buttons on cards and delete the card when clicked
function deleteCard(id){
  const divToRemove = document.getElementById(id);
  divToRemove.remove()
  
  myLibrary.splice(-1);
  console.log(myLibrary)
}

function addEventLs(){
  const deleteButtons = document.querySelectorAll('.delete')[document.querySelectorAll('.delete').length -1];
  deleteButtons.addEventListener('click', (e) => {
    console.log(e.target.id)
    deleteCard(e.target.id);
})
}



//change the state of reading
function readingButtons(){
  readButton = document.querySelectorAll('.readbutton')[document.querySelectorAll('.readbutton').length -1];
  readButton.addEventListener('click', (e)=>{
  console.log([...e.target.classList.values()])
  if([...e.target.classList.values()].includes('read')){
    e.target.classList.remove('read')
  } else {
    e.target.classList.add('read')
  }
})
}