const express = require("express");
const { insert, getAll, remove } = require("../controller/cart.controller");
const firebaseAuth = require("../middleware/auth-firebase");
const router = express.Router();

router
  .post("/", firebaseAuth, insert)
  .get("/:uid", getAll)
  .delete("/:id", firebaseAuth, remove);

module.exports = router;
