
import express from "express";
const quotesRouter = express.Router();

import {
  getQuotes,
  getQuoteById,
} from "../models/datamodels.js";

quotesRouter.get("/", async function (req, res) {
  const result = await getQuotes();
  res.json({ success: true, payload: result });
});

quotesRouter.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const result = await getQuoteById(id);
  res.json({ success: true, payload: result });
});

export default quotesRouter;
