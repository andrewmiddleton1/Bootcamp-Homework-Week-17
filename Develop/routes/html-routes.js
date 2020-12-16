// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const express = require("express");

const router = express.Router();

const path = require("path");


// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get("/", function (req, res) {
  console.log("homepage requested: " + req);
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exercise page
router.get("/exercise", function (req, res) {
  console.log("exercise requested: " + req);
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// stats page
router.get("/stats", function (req, res) {
  console.log("stats requested: " + req);
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});



module.exports = router;
