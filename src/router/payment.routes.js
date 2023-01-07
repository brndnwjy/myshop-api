const express = require("express");
const router = express.Router();
const { checkout } = require("../controller/payment.controller");

router
  .post("/checkout", checkout);

module.exports = router;
