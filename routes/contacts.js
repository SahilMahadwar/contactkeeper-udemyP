const express = require("express");
const router = express.Router();

// @route   POST api/contacts
// @desc    Get all contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all Contacts");
});

// @route   POST api/contacts
// @desc    Get all contacts
// @access  Private
router.post("/", (req, res) => {
  res.send("Add  Contacts");
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   Delect api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
