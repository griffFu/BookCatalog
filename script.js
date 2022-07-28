// creating blank array to add book objects to  
let myLibrary = []


//grabbing the elements from the HTML
const bookCard = document.querySelector('.book');






//creating the constructor, will take in the title and author of the book
function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//creating the class objects
let book1 = new book('goldfinch','tart','771')
let book2 = new book('451','bradbury','441')
let book3 = new book('narnia','cs-lewis','800')


//adding a book 
function addBookToLibrary(entry){
    //added book object to array
    myLibrary.push(entry)

    //creating the new entry box
    let newEntry = document.createElement('div');
    let titleCard = document.createElement('P');
    let authorCard = document.createElement('P');
    let pagesCard = document.createElement('P');
    let readButton = document.createElement('button');

    readButton.setAttribute('id','readButton');
    if(entry.read == true){
      readButton.style.background = '#AEAA6C'
      readButton.textContent = 'Read'
    }
    else {
      readButton.style.background = '#B2755E'
      readButton.textContent = 'unread'
    }
    
    readButton.addEventListener('click', function onClick() {
      if(entry.read == true){
          readButton.style.background = '#B2755E'
          readButton.textContent = 'unread'
          entry.read = false
      }
      else {
        readButton.style.background = '#AEAA6C'
        readButton.textContent = 'read'
        entry.read = true
      }
      /*
      readButton.innerHTML = `read ${entry.read}`
      readButton.style.background = readButton.style.background == 'green' ? 'red' : 'green'
      readButton.textContent = readButton.textContent == 'read' ? 'unread': 'read'
      console.log("made it here")
      */
    });
  
    
    
    
    //adding the text content to the box from the object
    titleCard.innerHTML = `Title: ${entry.title}`
    authorCard.innerHTML = `Author: ${entry.author}`
    pagesCard.innerHTML = `Pages: ${entry.pages}`
    
    
    
    //adding all of these values to the HTML
    newEntry.appendChild(titleCard);
    newEntry.appendChild(authorCard);
    newEntry.appendChild(pagesCard);
    newEntry.appendChild(readButton);
    bookCard.appendChild(newEntry);

    
    
    
}


//generates the modal with the form in it
//test for pop up button 
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




function returnBook(){
    event.preventDefault();
    modal.style.display = "none"
    let newBook = document.getElementById("bookTitle");
    let newAuthor = document.getElementById("bookAuthor");
    let newPages = document.getElementById("length");
    let newRead = document.getElementById("readStatus")

    let bookEntry = new book(newBook.value,newAuthor.value,newPages.value,newRead.checked)
    addBookToLibrary(bookEntry)

    newBook.value = ""
    newAuthor.value = ""
    newPages.value = ""
    newRead.checked = false;



}

