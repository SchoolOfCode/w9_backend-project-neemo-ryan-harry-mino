
import { query } from "../index.js";
import { quotes as quotes } from "../libs/quotes.js";


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
