import express from "express";

const app = express();

app.get("/login", (req, res, next) => {
  res.json({ username: "Mr Babe" });
});

app.post("/api/login", (req, res, next) => {
  res.sendStatus(401);
});

app.use(express.static("../client/dist"));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
