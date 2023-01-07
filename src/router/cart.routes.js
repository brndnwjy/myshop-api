const express = require("express");
const router = express.Router();

const { getAll, insert, remove } = require("../controller/cart.controller");
// const firebaseAuth = require("../middleware/auth-firebase");

router
  .get("/:uid", getAll)
  .post("/", insert)
  .delete("/:id", remove);

module.exports = router;
