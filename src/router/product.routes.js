const express = require("express");
const router = express.Router();

const {
  getAll,
  getDetail,
  insert,
  update,
  remove,
} = require("../controller/product.controller");
const upload = require("../middleware/multer");

router
  .get("/", getAll)
  .get("/:id", getDetail)
  .post("/", upload.single("photo"), insert)
  .put("/:id", update)
  .delete("/:id", remove);

module.exports = router;
