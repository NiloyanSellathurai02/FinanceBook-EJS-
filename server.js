require("dotenv").config();
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

/////////////////////////////////////////////////////////////////////////////
//End-Points
/////////////////////////////////////////////////////////////////////////////
app.get("/transactions", async (req, res) => {
  try {
    console.log(req.query);

    const { q, limit, page } = req.query;

    let limitFilter = 0;
    if (limit) limitFilter = Number(limit);

    let findQuery = {};
    if (q) findQuery["$text"] = { $search: q };

    let skipFilter = 0;
    if (page) skipFilter = (Number(page) - 1) * limitFilter;

    const count = await Transaction.countDocuments();
    const transactions = await Transaction.find(findQuery)
      .skip(skipFilter)
      .limit(limitFilter);

    res.send({ transactions, count });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/transactions/:transactionId", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.transactionId);
    res.send(transaction);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post("/transactions", async (req, res) => {
  try {
    const {
      date,
      name: description,
      transaction_num: transaction_number,
      amount,
      transcationType: type,
    } = req.body;

    const newTransaction = await Transaction.create({
      date,
      description,
      transaction_number,
      amount,
      type,
    });

    res.send(newTransaction);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.patch("/transactions/:transactionId", async (req, res) => {
  try {
    const transactionId = req.params.transactionId;
    console.log("Het werkt");
    console.log(req.body);
    console.log(req.body.dates);
    console.log(req.body.descriptions);
    console.log(req.body.transaction_numbers);
    console.log(req.body.amounts);
    console.log(req.body.types);

    await Transaction.findByIdAndUpdate(transactionId, {
      date: req.body.dates,
      description: req.body.descriptions,
      transaction_number: req.body.transaction_numbers,
      amount: req.body.amounts,
      type: req.body.types,
    });

    res.send();
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.delete("/transactions/:transactionId", async (req, res) => {
  try {
    const transactiondId = req.params.transactionId;
    await Transaction.findByIdAndDelete(transactiondId);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// money

app.get("/money", async (req, res) => {
  const findAllMoney = await Transaction.find();
  console.log(findAllMoney);
  res.send(findAllMoney);
});
