const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "test/")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/signup.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./signup.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./login.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(port, () => {
  console.log("The app is listen on http://localhost:3000");
});
