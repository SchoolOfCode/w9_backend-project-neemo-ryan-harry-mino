//this file creates the script functionality for creating a table in the database in Heroku
//this script gets added to the package.json file under scripts

/*
Import query function from db/index.js
Write SQL string that creates a table
use our query function to communicate with the database (hand in the SQL string)
*/

//active cors to help work matching front end

import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS books (book_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, author TEXT, country TEXT, imagelink VARCHAR, language TEXT, link VARCHAR, pages INT, title TEXT, year INT);`;

async function createBooksTable() {
  const res = await query(sqlString);
  console.log("Created books table - success");
}

createBooksTable();
