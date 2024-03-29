const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

app.use(express.static(path.join(__dirname, "test/")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.use(express.static("test"));

app.listen(3000, () => {
  console.log("The app is listen on http://localhost:3000");
});
