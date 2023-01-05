const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, {
    expiresIn: "6h",
  });
  return token;
};

module.exports = generateToken;
