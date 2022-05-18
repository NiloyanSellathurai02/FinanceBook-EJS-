const express = require("express");
const app = express();
const port = 7000;
const ejs = require("ejs");
const connectDB = require("./config/mongodb");
const Transaction = require("./models/Transaction");

//register view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("homepage");
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
