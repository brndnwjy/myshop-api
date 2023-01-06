const createError = require("http-errors");
const firebase = require("firebase-admin");
const credentials = require("../../credential.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
});

const userController = {
  // auth
  firebaseRegister: async (req, res, next) => {
    try {
      // const id = uuid();
      const { username, email, password } = req.body;
      // const hashedPassword = await hash(password, 10);

      const user = await firebase.auth().createUser({
        // uid: id,
        displayName: username,
        email,
        password,
        emailVerified: false,
        disabled: false,
      });

      res.json({
        msg: "Firebase register success",
        user,
      });
    } catch (err) {
      next(createError(500, err.message));
    }
  },
};

module.exports = userController;
