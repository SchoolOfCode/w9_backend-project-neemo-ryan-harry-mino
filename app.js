// imports
import express from "express";
import quotesRouter from "./db/routes/quotesRouter.js";

// creating App using express
const app = express();
// declaring PORT variable
const PORT = process.env.PGPORT || 3000;

// root route for our API
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "success",
  });
});

// App is listening on port
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());

// Routes
app.use("/quotes", quotesRouter);
