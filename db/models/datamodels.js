//  import {quotes} from "../libs/quotes.js";
import { query } from "../index.js";

//models below
//need to make async to work with database
//need to speak to database in SQL
//only change models instead of in routes

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

// export function searchQuoteByText(searchTerm) {
//   return quotes.filter(function (quotes) {
//     return quotes.text.toLowerCase().includes(searchTerm.toLowerCase());
//   });
// }

// export function searchQuoteByAuthor(searchTerm) {
//   const authorNamesMatchingSearchTerm = authors.filter(function (author) {
//     const authorName = `${author}`;
//     return authorName.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   const authorIdsMatchingSearchTerm = authorNamesMatchingSearchTerm.map(
//     function (author) {
//       return author.id;
//     }
//   );

//   return quotes.filter(function (quotes) {
//     return authorIdsMatchingSearchTerm.includes(quotes.author_id);
//   });
// }

// export function createQuote(quotes) {
//   quotes.push(quotes);
//   return quotes[quotes.length - 1];
// }

// export function updateQuoteById(id, updates) {
//   const foundIndex = quotes.findIndex(function (quotes) {
//     return quotes.id === id;
//   });
//   quotes[foundIndex] = updates;
//   return quotes[foundIndex];
// }

// export function deleteQuoteById(id) {
//   const foundIndex = quotes.findIndex(function (quotes) {
//     return quotes.id === id;
//   });
//   const item = quotes[foundIndex];
//   quotes.splice(foundIndex, 1);
//   return item;
// }
