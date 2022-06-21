import express from "express";
// import { fileURLToPath } from "url";
// import path, { dirname } from "path";
// import cookieParser from "cookie-parser";
// import logger from "morgan";

import quotesRouter from "./db/routes/quotesRouter.js";
import { quotes } from "./db/libs/quotes.js";

const app = express();
const PORT = process.env.PGPORT || 3000;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// test route or app.get?
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "success",
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());
// app.use(logger("dev"));
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

/* DO NOT CHANGE THIS ROUTE - it serves our front-end */
// app.get("/", function (req, res) {
//   res.sendFile(html);
// });

// Routes
app.use("/quotes", quotesRouter);
