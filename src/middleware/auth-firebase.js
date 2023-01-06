const firebase = require("firebase-admin");
const createError = require("http-errors");

const firebaseAuth = (req, res, next) => {
  const headerToken = req.headers.authorization;
  if (!headerToken) {
    return res.json({
      msg: "token not found",
    });
  }

  if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
    return res.json({
      msg: "token invalid",
    });
  }

  const token = headerToken.split(" ")[1];
  firebase
    .auth()
    .verifyIdToken(token)
    .then((res) => {
      console.log(res)
      next()
    })
    .catch((err) => {
      console.log(err);
      next(createError(403, "couldn't auuthorize"));
    });
};

module.exports = firebaseAuth;
