const express = require("express");
const router = express.Router();
const { insert, getAll, getDetail } = require("../controller/product.controller");

router
.post("/", insert)
.get("/", getAll)
.get("/:id", getDetail)
// .put("/")
// .delete("/");

module.exports = router;
