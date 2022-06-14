const router = require("express").Router();
const { object } = require("joi");
const { loginSchema, signUpSchema } = require("./auth.validation");

// code, routes

// Create two POST routes, one for Login and one for Register.

// Endpoint should have Try-Catch on all instances, both on Server ánd Auth.js

router.post("/auth/login", (req, res) => {
  try {
  } catch (error) {}
}); //function)

router.post("/auth/signup", (req, res) => {
  try {
    const credentialsEntries = req.body;
    res.send(credentialsEntries);
  } catch (error) {}
});
module.exports = router;
