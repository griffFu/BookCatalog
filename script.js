// creating blank array to add book objects to  
let myLibrary = []


//grabbing the elements from the HTML
const bookCard = document.querySelector('.book');
bookCard.textContent = "hey"



//creating the constructor, will take in the title and author of the book
function book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//creating the class objects
let book1 = new book('goldfinch','tart','771')
let book2 = new book('451','bradbury','441')

//adding a book 
function addBookToLibrary(entry){
    //added book object to array
    myLibrary.push(entry)

    //creating the new entry box
    let newEntry = document.createElement('div');
    let titleCard = document.createElement('P');
    let authorCard = document.createElement('P');
    let pagesCard = document.createElement('P');

    //adding the text content to the box from the object
    titleCard.innerHTML = "Title:"
    authorCard.innerHTML = "Author:"
    pagesCard.innerHTML = "Pages: "
    titleCard.innerHTML += entry.title;
    authorCard.innerHTML += entry.author;
    pagesCard.innerHTML += entry.pages;

    //adding all of these values to the HTML
    newEntry.appendChild(titleCard);
    newEntry.appendChild(authorCard);
    newEntry.appendChild(pagesCard);
    bookCard.appendChild(newEntry);

    
    
    
}

addBookToLibrary(book1);
addBookToLibrary(book2);

// creates new paragraph and adds the book title to it

   