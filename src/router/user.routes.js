const express = require("express");
const router = express.Router();
const { register, login } = require("../controller/user.controller");

router
  // auth
  .post("/register", register)
  .post("/login", login)

module.exports = router;
