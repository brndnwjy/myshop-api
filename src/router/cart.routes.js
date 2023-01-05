const express = require("express");
const { insert, getAll, remove } = require("../controller/cart.controller");
const jwtAuth = require("../middleware/auth");
const router = express.Router();

router
  .post("/", jwtAuth, insert)
  .get("/", jwtAuth, getAll)
  .delete("/:id", jwtAuth, remove);

module.exports = router;
