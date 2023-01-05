require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const morgan = require("morgan");

const main = require("./src/router")

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(helmet());
app.use(xss());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("v1", main);

app.all("*", (req, res, next) => {
  next(
    res.json({
      message: "Page not found",
    })
  );
});

app.use((err, req, res) => {
  const msg = err.statusMessage || "Internal Server Error";
  const code = err.statusCode || "500";

  res.status(code).json({
    message: msg,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
