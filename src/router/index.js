const express = require("express");
const router = express.Router()

const userRoutes = require("./user.routes")
const productRoutes = require("./product.routes")
const cartRoutes = require("./cart.routes")

router
.use("/user", userRoutes)
.use("/product", productRoutes)
.use("/cart", cartRoutes)

module.exports = router