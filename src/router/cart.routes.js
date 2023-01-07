const express = require("express");
const router = express.Router();

const { getAll, insert, remove } = require("../controller/cart.controller");
const firebaseAuth = require("../middleware/auth-firebase");

router
  .get("/:uid", firebaseAuth, getAll)
  .post("/", firebaseAuth, insert)
  .delete("/:id", firebaseAuth, remove);

module.exports = router;
