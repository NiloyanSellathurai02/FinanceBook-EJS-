const router = require("express").Router();
const { object } = require("joi");
const { loginSchema, signUpSchema } = require("./auth.validation");

// code, routes

// Create two POST routes, one for Login and one for Register.

// Endpoint should have Try-Catch on all instances, both on Server ánd Auth.js

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const credentials = req.body;
    const { username, password } = await loginSchema.validateAsync(credentials);
    res.send();
  } catch (error) {
    res.status(400).send(error.message);
  }
}); //function)

router.post("/signup", async (req, res) => {
  try {
    const credentials = req.body;
    const { username, password } = await signUpSchema.validateAsync(
      credentials
    );

    // throw Error("Network error...");

    console.log(username, password);
    res.send(req.body);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = router;
