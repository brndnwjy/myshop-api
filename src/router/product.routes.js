const express = require("express");
const router = express.Router();
const { insert, getAll } = require("../controller/product.controller");

router
.post("/", insert)
.get("/", getAll)
// .put("/")
// .delete("/");

module.exports = router;
