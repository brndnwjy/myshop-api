const express = require("express");
const router = express.Router();

const productRoutes = require("./product.routes");
const cartRoutes = require("./cart.routes");
const paymentRoutes = require("./payment.routes");

router
  .use("/product", productRoutes)
  .use("/cart", cartRoutes)
  .use("/payment", paymentRoutes);

module.exports = router;
