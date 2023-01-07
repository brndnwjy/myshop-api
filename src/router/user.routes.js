const express = require("express");
const router = express.Router();

const { firebaseRegister } = require("../controller/user.controller");

router.post("/firebase-register", firebaseRegister);

module.exports = router;
