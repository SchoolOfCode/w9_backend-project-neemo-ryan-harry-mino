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
import { quotes as quotes } from "../libs/quotes.js";

//`INSERT INTO quotes (text, author) VALUES ($1, $2);`, [quotes[i].author_id, quotes[i].title]

async function populateQuotesTable() {
  const sqlStringPopulate = `INSERT INTO quotes (text, author) VALUES ($1, $2);`;

  for (let i = 0; i < quotes.length; i++) {
    const res = await query(sqlStringPopulate, [
      quotes[i].text,
      quotes[i].author,
    ]);
    console.log(`populated with ${quotes[i].text}`);
  }
}

populateQuotesTable();
