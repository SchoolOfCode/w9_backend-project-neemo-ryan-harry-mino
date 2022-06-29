//this file creates the script functionality for creating a table in the database in Heroku
//this script gets added to the package.json file under scripts

/*
Import query function from db/index.js
Write SQL string that creates a table
use our query function to communicate with the database (hand in the SQL string)
*/

import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS quotes (quote_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, text TEXT, author TEXT);`;

async function createQuotesTable() {
  const res = await query(sqlString);
  console.log("Created quotes table - success");
}

createQuotesTable();
