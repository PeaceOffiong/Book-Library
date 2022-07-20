const books = {
    nightoverwaters: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388249830i/5055.jpg",
    itendswithus: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1470427482i/27362503.jpg",
    thesecretlivesofbabasegiswives: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1264521277i/7194279.jpg",
    mendontdie: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602578946i/55658722.jpg",
    thedavincicode: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579621267i/968.jpg",
    purplehibiscus: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1527718322i/14569052.jpg",
    idonotcometoyoubychance: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1293037353i/6265288.jpg",
    ofwomenandfrogs: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1542900692i/42593652.jpg",
    beliversandhustlers: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646172734i/60532867.jpg",
    loveincolor: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1611551071i/54698746.jpg",
    halfofayellowsun: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327934717i/18749.jpg"
}
console.log(books.titleObject)

const submit = document.querySelector(".submit");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#isbn");
const main = document.querySelector("main")
console.log(main);


submit.addEventListener("click", (e) => {
    getValues(e)
});

function getValues(e) {
    e.preventDefault();
    collectData()
}

function collectData() {
    let titleValue = title.value
    const titleObject = title.value.split(" ").join("");
    let authorValue = author.value;
    let isbnValue = isbn.value;
    console.log(titleObject)
    console.log(books[titleObject])
    const section = document.createElement('section');
    section.className = "section";
    section.innerHTML = `
    <div class= "image">
        <img src= "${books[titleObject]}">
            </div>
            <div class="center">
                <div class="title">${titleValue}</div>
                <div class="author">${authorValue}</div>
                <div class="isbn">${isbnValue}</div>
            </div>
            <div class="remove">Remove
                <i class="fa-solid fa-x"></i>
            </div>"`
    main.appendChild(section);
    title.value = "";
    author.value = "";
    isbn.value = "";

    deleteBook()
}

function deleteBook() {
    const deleteBtns = document.querySelectorAll(".remove");

    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", () => deleteBtn.parentElement.remove());
    })
}
