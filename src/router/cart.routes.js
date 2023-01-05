const express = require("express");
const { insert, getAll } = require("../controller/cart.controller");
const router = express.Router();

router
.post("/", insert)
.get("/", getAll)
// .put("/")
// .delete("/");

module.exports = router;
