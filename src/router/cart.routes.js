const express = require("express");
const { insert, getAll, remove } = require("../controller/cart.controller");
const router = express.Router();

router
.post("/", insert)
.get("/", getAll)
.delete("/:id", remove);
// .put("/")

module.exports = router;
