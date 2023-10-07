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
    const bookControl = document.createElement("div");
    const removeButton = document.createElement("button");
    const readButton = document.createElement("button");

    div.classList.add("book");
    accent.classList.add("accent");
    divTitle.classList.add("book-title");
    divAuthor.classList.add("book-author");
    divPages.classList.add("book-pages");
    divInfo.classList.add("book-info");
    bookControl.classList.add("book-controls");
    removeButton.classList.add("clickable", "remove-button");
    readButton.classList.add("clickable","read-button");

    divTitle.textContent = "Title: " + this.title;
    divAuthor.textContent= "Author: "+ this.author;
    divPages.textContent = "Pages: " + this.pages;
    removeButton.textContent = "Remove";
    readButton.textContent = "Read";

    removeButton.addEventListener('click',(e)=>{
        div.remove();
        for(let x in library){
            if(library[x].book === e.target.parentNode.parentNode.parentNode){
                library.splice(x,1);
            }

        }
    });
    readButton.addEventListener('click',()=>{
        accent.classList.toggle('read');
    });
    divInfo.appendChild(divTitle,);
    divInfo.appendChild(divAuthor);
    divInfo.appendChild(divPages);
    divInfo.appendChild(bookControl);

    bookControl.appendChild(removeButton);
    bookControl.appendChild(readButton);

    div.appendChild(accent);
    div.appendChild(divInfo);

    return div;
}

function addBook(title,author,pages){
    for(let x in library){
        if(library[x].title == title.value && library[x].author==author.value){
            title.value="";
            author.value="";
            pages.value="";
            displayBooks();
            return;
        }
    }
    library.push(new Book(title.value, author.value, pages.value));
    displayBooks();
    title.value="";
    author.value="";
    pages.value="";

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
const cancelButton = document.querySelector(".cancel");

addButton.addEventListener('click', showForm);
submitButton.addEventListener('click',getForm);
cancelButton.addEventListener('click',()=>{
    const popup = document.querySelector(".popup");
    popup.classList.toggle("hidden");
})

