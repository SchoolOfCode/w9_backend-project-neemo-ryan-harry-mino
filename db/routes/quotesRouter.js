//DONE FOR NOW MAY NEED TO COME BACK
import express from "express";
// import { quotes } from "../libs/Quotes.js";
const quotesRouter = express.Router();

// GET REQUESTS AND HTTP requests

import {
  getQuotes,
  // searchQuoteByText,
  // searchQuoteByAuthor,
  // getQuoteById,
  // createQuote,
  // updateQuoteById,
  // deleteQuoteById,
} from "../models/datamodels.js";

/* Quotes endpoints go here */

quotesRouter.get("/", async function (req, res) {
  // GET query handlers
  // if (req.query.search !== undefined) {
  // const result = searchQuoteByText(req.query.search);
  // return res.json({ success: true, payload: result });
  // }

  // if (req.query.author !== undefined) {
  // const result = searchQuoteByAuthor(req.query.author);
  // return res.json({ success: true, payload: result });
  // }
  const result = await getQuotes();
  // console.log(result)
  res.json({ success: true, payload: result });
});

// quotesRouter.get("/:id", function (req, res) {
// const id = Number(req.params.id);
// const Quote = getQuoteById(id);
// res.json({ success: true, payload: Quote });
// });
//
// quotesRouter.post("/", function (req, res) {
// const newQuote = req.body;
// const result = createQuote(newQuote);
// res.json({ success: true, payload: result });
// });
//
// quotesRouter.put("/:id", function (req, res) {
// const id = Number(req.params.id);
// const data = req.body;
// const result = updateQuoteById(id, data);
// res.json({ success: true, payload: result });
// });
//
// quotesRouter.delete("/:id", function (req, res) {
// const id = Number(req.params.id);
// const result = deleteQuoteById(id);
// res.json({ success: true, payload: result });
// });

export default quotesRouter;
