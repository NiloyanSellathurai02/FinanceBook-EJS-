require("dotenv").config();
require("ejs");
require("./config/mongodb");
const express = require("express");
const app = express();

const api = require("./routes/api");
const Transaction = require("./models/Transaction");
const calculateStats = require("./utils/calculateStats");
const res = require("express/lib/response");

const PORT = 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(api);

// VIEWS
app.get("/", async (req, res) => {
  const transactions = await Transaction.find();
  const { profitLoss, purchase, revenue } = calculateStats(transactions);

  res.render("homepage", {
    pageTitle: "Transactions overview | NS Finance",
    profitLoss,
    purchase,
    revenue,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { pageTitle: "About us | NS Finance" });
});

app.get("/login", (req, res) => {
  res.render("login", { pageTitle: "Login in |NP Finance" });
});

app.get("/signup", (req, res) => {
  res.render("signup", { pageTitle: "Sign Up | NP Finance" });
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
