//class book that tells the parameters of what a book should have
class Book {
    constructor(author, language, subject, title,comment) {
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
        this.comment = comment;
    }
}

// class UI that will display the current books I have in storage
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                author: "1",
                language: "2",
                subject: "3",
                title: "4"
            },
            {
                author: "5",
                language: "6",
                subject: "7",
                title: "8"
            }
            // {
            //     author: ["Burroughs, Edgar Rice"],
            //     language: "en",
            //     subject: [
            //       "Adventure stories",
            //       "PZ",
            //       "Fantasy fiction",
            //       "Tarzan (Fictitious character) -- Fiction",
            //       "PS",
            //       "Jungle animals -- Fiction",
            //     ],
            //     title: "The Beasts of Tarzan",
            //   }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    //adding a book to the current UI of books
    static addBookToList(book) {

        const list = document.querySelector(".book-list");

        const row = document.createElement("tr");

        // //creating the button element for comment
        // const comment = document.createElement("button");

        // // giving the classname comment to he button being created
        // comment.className = "comment"

        // //the text on the button is comment for users to see what it is stating
        // comment.innerText = "Comment"

        row.innerHTML = `
        <td>${book.author}</td>
        <td>${book.language}</td>
        <td>${book.subject}</td>
        <td>${book.title}</td>
        <td><button class = "delete">X</a></td>
       `;

        list.appendChild(row);

        // //appending the comment to the row of books  
        // row.appendChild(comment);
    }

    //commenting a book
    static commentBook() {
        const comment = document.createElement("button");
        comment.className = "comment";
        comment.appendChild(document.createElement("input"));
        const tbody = document.querySelector("tbody");
        const form = document.querySelector(".book-list");
        tbody.insertBefore(button, form);

    }

    // deleting a book
    static deleteBook(el) {
        if (el.classList.contains("delete")) {
            el.parentElement.parentElement.remove();
        }
    }

    //showing alert message when creating or removing a book
    static showAlert(message, className) {
        const div = document.createElement("div");
        div.className = "alert";
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.querySelector(".book-form");
        container.insertBefore(div, form);

        //setting time for when the alert is removed from the page
        setTimeout(() => document.querySelector(".alert").remove(), 2000);
    }

    //clearing fields when the input is clicked, for users to enter another value without erasing
    static clearFields() {
        document.querySelector(".author").value = "";
        document.querySelector(".language").value = "";
        document.querySelector(".subject").value = "";
        document.querySelector(".title").value = "";
    }
}

//displaying books with DOMContentLoaded based on what stored books are in my UI
document.addEventListener("DOMContentLoaded", UI.displayBooks);


//using EventListener submit to make sure all the fields need to be inputted and
//makes sure that the book has the correct parameters when making a new one
document.querySelector(".book-form").addEventListener("submit", (e) => {

    e.preventDefault();

    const author = document.querySelector(".author").value;
    const language = document.querySelector(".language").value;
    const subject = document.querySelector(".subject").value;
    const title = document.querySelector(".title").value;

    if (author === "" || language === "" || subject === "" || title === "") {
        UI.showAlert("Please fill in all fields");
    } else {
        const book = new Book(author, language, subject, title);

        UI.addBookToList(book);

        UI.showAlert("Book Added");

        UI.clearFields();
    }
});

//using EventListener to delete the book whenever the X is clicked
document.querySelector(".book-list").addEventListener("click", (e) => {
    UI.deleteBook(e.target);

    UI.showAlert("Book Removed");


});

//using EventListener to comment the book whenever the button Comment is clicked
document.querySelector(".commentBtn").addEventListener("click", (e) => {
    UI.showAlert("Comment Added");

    const comment = document.createElement("text-box");
    // const form = document.querySelector(".book-list");

   comment.appendChild(row);

})