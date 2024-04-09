// const books = [
//   {
//     name: "To Kill a Mockingbird",
//     authorFirst: "Harper",
//     authorLast: "Lee",
//     publishDate: 1960,
//     genre: ["mystery", "historical", "fiction"],
//   },
//   {
//     name: "The Great Gatsby",
//     authorFirst: "F. Scott",
//     authorLast: "Fitzgerald",
//     publishDate: 1925,
//     genre: ["mystery", "historical", "fiction"],
//   },
//   {
//     name: "The Hobbit",
//     authorFirst: "JRR",
//     authorLast: "Tolkien",
//     publishDate: 1937,
//     genre: ["fantasy", "fiction"],
//   },
//   {
//     name: "Harry Potter and the Deathly Hallows",
//     authorFirst: "JK",
//     authorLast: "Rowling",
//     publishDate: 1997,
//     genre: ["fantasy", , "fiction"],
//   },
//   {
//     name: "Ulysses",
//     authorFirst: "James",
//     authorLast: "Joyce",
//     publishDate: 1918,
//     genre: ["historical", "non-fiction"],
//   },
//   {
//     name: "War and Peace",
//     authorFirst: "Leo",
//     authorLast: "Tolstoy",
//     publishDate: 1867,
//     genre: ["historical", "fiction"],
//   },
//   {
//     name: "Pride and Prejudice",
//     authorFirst: "Jane",
//     authorLast: "Austen",
//     publishDate: 1813,
//     genre: ["fiction"],
//   },
//   {
//     name: "The Catcher in the Rye",
//     authorFirst: "JD",
//     authorLast: "Salinger",
//     publishDate: 1951,
//     genre: ["fiction"],
//   },
//   {
//     name: "Great Expectations",
//     authorFirst: "Charles",
//     authorLast: "Dickens",
//     publishDate: 1861,
//     genre: ["historical", "fiction"],
//   },
//   {
//     name: "Little Women",
//     authorFirst: "Lousia May",
//     authorLast: "Alcott",
//     publishDate: 1868,
//     genre: ["womens", "historical", "fiction"],
//   },
// ];

// const titles = [
//   "To Kill a Mockingbird",
//   "The Great Gatsby",
//   "The Hobbit",
//   "Harry Potter and the Deathly Hallows",
//   "Ulysses",
//   "War and Peace",
//   "Pride and Prejudice",
//   "The Catcher in the Rye",
//   "Great Expectations",
//   "Little Women",
// ];

// //Array of authors and the book they wrote
// //"--- wrote --- in ---"
// books.forEach((book) => console.log(book.authorFirst + ' ' + book.authorLast 
//   + ' wrote ' + book.name + ' in ' + book.publishDate));

// //Sort books from oldest to most recent
// books.sort((firstItem, secondItem) => 
// firstItem.publishDate - secondItem.publishDate);
// console.log(books);

// //sort books alphabetically
// titles.sort();
// console.log(titles);
// //Find who wrote War and Peace
// const author = books.filter((book) =>
// book.name === "War and Peace");
// author.forEach((book)=> console.log(book.authorFirst + " " + book.authorLast))
// //how many books were written before 1900?
// const howmany = books.filter((book) => book.publishDate > 1900)
// const result = console.log(howmany.length)
// //was there at least one book published within the last 100 years?
// const year = new Date().getFullYear();
// const arethere = books.filter((book)=> book.publishDate > year-100);
// if (arethere.length > 0) (
//   console.log('yes')
// );
// else (
//   console.log('no')
// );
// //was every book published within the last 100 years?
// if (arethere.length < books.length)(
//   console.log('no')
// )
// else (console.log('yes'))
// //print a list of books that "includes" the genre historical
// const hist = books.filter((book) => book.genre.includes("historical"));
// hist.forEach((book)=> console.log(book.name))
// //print a list of books that "include" a genre inputted by the user
// const enter = prompt('Please enter a genre: ').toLowerCase();
// console.log("Books containing the genre '" + enter + "': ")
// const genres = books.filter((book) => book.genre.includes(enter));
// genres.forEach((book) => console.log((book.name)));
// //add a new book to the end of books
// const nameinput = prompt('Please enter a book name: ').toUpperCase();
// const authorfirstinput = prompt('Please enter your first name: ').toUpperCase();
// const authorlastinput = prompt('Please enter your last name: ').toUpperCase();
// const genreinput = prompt('Please enter a genre: ').toLowerCase();

// books.push({name: nameinput, authorFirst: authorfirstinput, authorLast: authorlastinput, publishDate: year, genre: genreinput})
// console.log(books);
let age = 0
while (age<42){
  age++;
 console.log('It has been a year');
};
console.log('Happy 42nd Birthday!')