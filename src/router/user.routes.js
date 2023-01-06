const express = require("express");
const router = express.Router();
const { register, login, firebaseRegister } = require("../controller/user.controller");

router
  // auth
  .post("/firebase-register", firebaseRegister)

module.exports = router;
