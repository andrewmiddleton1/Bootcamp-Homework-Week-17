// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const express = require("express");

const router = express.Router();


// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get("/", function (req, res) {
  console.log("homepage requested: " + req);
  res.render("index", {});
});

// exercise page
router.get("/exercise", function (req, res) {
  console.log("exercise requested: " + req);
  res.render("exercise", {});
});

// stats page
router.get("/stats", function (req, res) {
  console.log("stats requested: " + req);
  res.render("stats", {});
});



module.exports = router;
