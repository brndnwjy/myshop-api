const express = require("express");
const router = express.Router();
const { register } = require("../controller/user.controller");

router
  // auth
  .post("/register", register);

module.exports = router;
