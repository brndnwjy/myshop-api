const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const jwtAuth = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY_JWT);

      req.decoded = decoded;
      next();
    } else {
      res.json({
        msg: "token not found",
      });
    }
  } catch (err) {
    console.log(err);
    if (err.name === "JsonWebTokenError") {
      next(createError(403, "token invalid"));
    } else if (err.name === "TokenExpiredError") {
      next(createError(403, "token expired"));
    } else {
      next(createError(403, "error occured"));
    }
  }
};

module.exports = jwtAuth;
