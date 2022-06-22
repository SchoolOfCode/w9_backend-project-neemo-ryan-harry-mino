//DONE FOR NOW MAY NEED TO COME BACK
import express from "express";
// import { quotes } from "../libs/Quotes.js";
const quotesRouter = express.Router();

// GET REQUESTS AND HTTP requests

import {
  getQuotes,
  getQuoteById,
  // searchQuoteByText,
  // searchQuoteByAuthor,
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
  res.json({ success: true, payload: result });
});

quotesRouter.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const result = await getQuoteById(id);
  res.json({ success: true, payload: result });
});

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
