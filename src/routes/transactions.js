const router = require("express").Router();
const Transaction = require("../models/Transaction");

router.get("/", async (req, res) => {
  try {
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

router.get("/stats", async (req, res) => {
  const findAllMoney = await Transaction.find();
  res.send(findAllMoney);
});

router.get("/:transactionId", async (req, res) => {
  try {
    console.log(req.params.transactionId);
    const transaction = await Transaction.findById(req.params.transactionId);
    res.send(transaction);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
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

router.patch("/:transactionId", async (req, res) => {
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

router.delete("/:transactionId", async (req, res) => {
  try {
    const transactiondId = req.params.transactionId;
    await Transaction.findByIdAndDelete(transactiondId);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
