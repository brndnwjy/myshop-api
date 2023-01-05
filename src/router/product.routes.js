const express = require("express");
const router = express.Router();
const { insert, getAll, getDetail, update } = require("../controller/product.controller");

router
.post("/", insert)
.get("/", getAll)
.get("/:id", getDetail)
.put("/:id", update)
// .delete("/");

module.exports = router;
