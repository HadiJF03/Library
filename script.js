const library = [];

function Book(title, author, pages,){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.book = this.createCard();
}
Book.prototype.createCard = function(){
    const div = document.createElement("div");
    const accent = document.createElement("div");
    const divTitle = document.createElement("div");
    const divAuthor = document.createElement("div");
    const divPages = document.createElement("div");
    const divInfo = document.createElement("div");

    div.classList.add("book");
    accent.classList.add("accent");
    divTitle.classList.add("book-title");
    divAuthor.classList.add("book-author");
    divPages.classList.add("book-pages");
    divInfo.classList.add("book-info");

    divTitle.textContent = "Title: " + this.title;
    divAuthor.textContent= "Author: "+ this.author;
    divPages.textContent = "Pages: " + this.pages;

    divInfo.appendChild(divTitle,);
    divInfo.appendChild(divAuthor);
    divInfo.appendChild(divPages);
    div.appendChild(accent);
    div.appendChild(divInfo);
    return div;
}

function addBook(title,author,pages){
    library.push(new Book(title.value, author.value, pages.value));
    title.value="";
    author.value="";
    pages.value="";
    displayBooks();
}
function displayBooks(){
    const alwaysLast = document.querySelector("#new");
    const books = document.querySelector(".library");
    for(const x in library){
        books.insertBefore(library[x].book,alwaysLast);
    }
}
function showForm(){
    const popup = document.querySelector(".popup");
    popup.classList.toggle("hidden");
}
function getForm(){
    addBook(document.querySelector("#title"),
    document.querySelector("#author"),
    document.querySelector("#pages"))
    const popup = document.querySelector(".popup");
    popup.classList.toggle("hidden");

}

const addButton = document.querySelector(".new-book");
const submitButton = document.querySelector(".submit");
addButton.addEventListener('click', showForm);
submitButton.addEventListener('click',getForm);