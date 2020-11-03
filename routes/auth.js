const express = require("express");
const router = express.Router();

// @route   Get api/auth
// @desc    get logged in a user
// @access  private
router.get("/", (req, res) => {
  res.send("Get Logged in user");
});

module.exports = router;

// @route   Get api/auth
// @desc    Auth user and get token
// @access  Public
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
