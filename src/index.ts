import express from "express";
import { config } from "dotenv";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("<h1> Hello World <h1/>");
});

app.listen(PORT, () =>
  console.log(`The server is listening on http://localhost:${PORT}/`)
);
