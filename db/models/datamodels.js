//  import {quotes} from "../libs/quotes.js";
import { query } from "../index.js";

export async function getQuotes() {
  let sqlString = `SELECT * FROM quotes;`;
  const res = await query(sqlString);
  return res.rows;
}

export async function getQuoteById(id) {
  let sqlString = `SELECT * FROM quotes WHERE quote_id = ${id} ;`;
  const res = await query(sqlString);
  return res.rows;
}