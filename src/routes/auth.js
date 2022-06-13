const router = require("express").Router();
const { loginSchema, signUpSchema } = require("./auth.validation");

// code, routes

// Create two POST routes, one for Login and one for Register.

// Endpoint should have Try-Catch on all instances, both on Server ánd Auth.js

router.post("/login", (req, res) => {
  try {
  } catch (error) {}
}); //function)

router.post("/signup"); //function)

module.exports = router;
