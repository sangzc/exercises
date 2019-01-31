const SALES_TAX = 0.08

let books = [
  {
    title: "The Bell Jar",
    authors: ["Plath"],
    copies: 3
  },
  {
    title: "The Great Gatsby",
    authors: ["Fitzgerald"],
    copies: 2
  },
  {
    title: "Eloquent JavaScript",
    authors: ["Haverbeke"],
    copies: 0
  },
  {
    title: "Node.js in Action",
    authors: ["Cantelon", "Harter", "Holowaychuk", "Rajlich"],
    copies: 4
  },
];


/* Sell a book: decreases copies on hand */

function sellBook(book) {
  if (book.copies < 1) {
    throw new Error("Not enough copies on hand!");
  }
  book.copies -= 1;
}


/* Get book price; handle any special sales. */

function getPrice(book) {
  let price;

  // handle monthly sale  
  if (book.title === "The Bell Jar" &&
      book.authors.length === 1 &&
      book.authors[0] === "Plath")
    price = 5.00;
  else
    price = 10.00;

  return price * (1 + SALES_TAX);
}
