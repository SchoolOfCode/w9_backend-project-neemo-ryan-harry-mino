import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import booksRouter from "./routes/booksrouter.js";
import { books } from "./libs/books.js";

const app = express();
const PORT = process.env.port || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// test route or app.get?
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "sucess",
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/* DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get('/', function (req, res) {
  res.sendFile(html);
});

app.use("/routes", indexRouter);
app.use("/books", booksRouter);
// app.use("/routes/booksrouter.js", booksRouter);