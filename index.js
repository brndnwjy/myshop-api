require("dotenv").config();

const bp = require("body-parser");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const morgan = require("morgan");

const main = require("./src/router");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(helmet());
app.use(xss());
app.use(morgan("dev"));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use("/v1", main);

app.all("*", (req, res, next) => {
  next(
    res.json({
      message: "Page not found",
    })
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
