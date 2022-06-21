//DONE FOR NOW MAY NEED TO COME BACK
import express from "express";
// import { books } from "../libs/books.js";
const booksRouter = express.Router();

// GET REQUESTS AND HTTP requests

import {
  getBooks,
  searchBooksByTitle,
  searchBooksByAuthor,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
} from "../models/datamodels.js";

/* books endpoints go here */

booksRouter.get("/", async function (req, res) {
  if (req.query.search !== undefined) {
    const result = searchBooksByTitle(req.query.search);
    return res.json({ success: true, payload: result });
  }

  if (req.query.author !== undefined) {
    const result = searchBooksByAuthor(req.query.author);
    return res.json({ success: true, payload: result });
  }

  const result = await getBooks();
  res.json({ success: true, payload: result });
});


booksRouter.get("/:id", function (req, res) {
  const id = Number(req.params.id);
  const book = getBookById(id);
  res.json({ success: true, payload: book });
});

booksRouter.post("/", function (req, res) {
  const newBook = req.body;
  const result = createBook(newBook);
  res.json({ success: true, payload: result });
});

booksRouter.put("/:id", function (req, res) {
  const id = Number(req.params.id);
  const data = req.body;
  const result = updateBookById(id, data);
  res.json({ success: true, payload: result });
});

booksRouter.delete("/:id", function (req, res) {
  const id = Number(req.params.id);
  const result = deleteBookById(id);
  res.json({ success: true, payload: result });
});

export default booksRouter;
