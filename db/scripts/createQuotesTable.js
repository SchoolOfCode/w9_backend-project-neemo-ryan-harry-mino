
import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS quotes (quote_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, text TEXT, author TEXT);`;

async function createQuotesTable() {
  const res = await query(sqlString);
  console.log("Created quotes table - success");
}

createQuotesTable();
