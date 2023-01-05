const createError = require("http-errors");
const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");
const userModel = require("../model/user.model");

const userController = {
  // auth
  register: async (req, res, next) => {
    const id = uuid();
    const { username, email, password } = req.body;
    const hashedPassword = await hash(password, 10);

    const { rowCount: check } = await userModel.checkEmail(email);

    if (check) {
      return next(createError(500, "Email already in use"));
    }

    const data = {
      id,
      username,
      email,
      password: hashedPassword,
    };

    userModel
      .register(data)
      .then(() => {
        delete data.password;
        res.json({
          message: "Register success",
          data,
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          message: "Register failed",
        });
      });
  },
};

module.exports = userController;
