import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to  App!");
});
app.listen(PORT, (hostname) => {
  console.log(` App running on http://localhost:${PORT}`);
});

export default app;
