const express = require("express");
const router = express.Router();
const { insert } = require("../controller/product.controller");

router
.post("/", insert)
// .get("/")
// .put("/")
// .delete("/");

module.exports = router;
