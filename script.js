// creating blank array to add book objects to  
let myLibrary = []


//creating the constructor, will take in the title and author of the book
function book(title,author){
    this.title = title;
    this.author = author;
}

//creating the class objects
let book1 = new book('goldfinch','tart')
let book2 = new book('451','bradbury')

//adding a book 
function addBookToLibrary(entry){
    myLibrary.push(entry)
}

addBookToLibrary(book1);
addBookToLibrary(book2);