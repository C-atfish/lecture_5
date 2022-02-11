import express from "express";
import * as path from "path";

const app = express();

app.get("/api/login", (req, res, next) => {
  res.json({ username: "Mr Babe" });
});

app.post("/login", (req, res, next) => {
  res.sendStatus(401);
});

app.use(express.static("../client/dist"));

app.use((req, res) => {
  res.sendFile(path.resolve("..client"));
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
