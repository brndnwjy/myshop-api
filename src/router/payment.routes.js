const express = require("express");
const router = express.Router();

const { checkout, createHitory } = require("../controller/payment.controller");

router
  .post("/checkout", checkout)
  .post("/history", createHitory);

module.exports = router;
