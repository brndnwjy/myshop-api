const express = require("express");
const { insert } = require("../controller/cart.controller");
const router = express.Router();

router
.post("/", insert)
// .get("/")
// .put("/")
// .delete("/");

module.exports = router;
