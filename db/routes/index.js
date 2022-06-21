//COMPLETE
import express from "express";
const Indexrouter = express.Router();

Indexrouter.get("/", function (req, res, next) {
  res.render("index", { title: "Books" });
});

export default Indexrouter;