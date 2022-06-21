//link = fetch request
// DO NOT WRITE 


//  import {books} from "../libs/books.js";
import { query } from "../db/index.js";

//models below
//need to make async to work with database
//need to speak to database in SQL
//only change models

export async function getBooks() {
  let sqlString = `SELECT * FROM books;`;
  const res = await query(sqlString);
  console.log(res);
  return res.rows
}



export function searchBooksByTitle(searchTerm) {
  return books.filter(function (book) {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

export function searchBooksByAuthor(searchTerm) {
  const authorNamesMatchingSearchTerm = authors.filter(function (author) {
    const authorName = `${author.first_name} ${author.last_name}`;
    return authorName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const authorIdsMatchingSearchTerm = authorNamesMatchingSearchTerm.map(
    function (author) {
      return author.id;
    }
  );

  return books.filter(function (book) {
    return authorIdsMatchingSearchTerm.includes(book.author_id);
  });
}

export function getBookById(id) {
  const found = books.find(function (book) {
    return book.id === id;
  });
  return found;
}

export function createBook(book) {
  books.push(book);
  return books[books.length - 1];
}

export function updateBookById(id, updates) {
  const foundIndex = books.findIndex(function (book) {
    return book.id === id;
  });
  books[foundIndex] = updates;
  return books[foundIndex];
}

export function deleteBookById(id) {
  const foundIndex = books.findIndex(function (book) {
    return book.id === id;
  });
  const item = books[foundIndex];
  books.splice(foundIndex, 1);
  return item;
}


