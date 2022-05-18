const router = require("express").Router();
const transactions = require("./transactions");

router.use("/transactions", transactions);

module.exports = router;
