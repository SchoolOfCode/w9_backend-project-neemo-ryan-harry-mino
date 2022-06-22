// imports
import express from "express";
import quotesRouter from "./db/routes/quotesRouter.js";
import cors from 'cors'

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
// 
// app.get('/products/:id', function (req, res, next) {
  // res.json({msg: 'This is CORS-enabled for all origins!'})
// })
// 
// App is listening on port
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());
app.use(cors());

// Routes
app.use("/quotes", quotesRouter);
