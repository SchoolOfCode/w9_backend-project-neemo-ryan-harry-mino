//DO NOT TOUCH
/*
Import query from db/index (query is a defined function in db/index.js) 
write INSERT INTO statement to insert values from our data into our table (in SQL language)
import data array
loop through data array
for each object, insert data into our database
confirm data has gone into the table successfully
*/

import { query } from "../index.js";
import { books } from "../../libs/books.js";


//`INSERT INTO books (author_id, title) VALUES ($1, $2);`, [books[i].author_id, books[i].title]

async function populateBooksTable () {
  const sqlStringPopulate = `INSERT INTO books (author, country, imageLink, language, link, pages, title, year) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;


  for (let i = 0; i < books.length; i++) {
    const res = await query(sqlStringPopulate, [books[i].author, books[i].country, books[i].imageLink, books[i].language, books[i].link, books[i].pages, books[i].title, books[i].year]
      );

    console.log(`populated with ${books[i].title}`);
  }
}

populateBooksTable();