const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: { type: "string", unique: true },
  password: "string",
});

const User = mongoose.model("Transaction", schema);

module.exports = User;
