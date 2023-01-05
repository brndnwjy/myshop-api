const createError = require("http-errors");
const { v4: uuid } = require("uuid");
const { hash, compare } = require("bcryptjs");
const userModel = require("../model/user.model");
const generateToken = require("../helper/auth");

const userController = {
  // auth
  register: async (req, res, next) => {
    try {
      const id = uuid();
      const { username, email, password } = req.body;
      const hashedPassword = await hash(password, 10);

      const { rowCount: check } = await userModel.checkEmail(email);

      if (check) {
        return next(createError(403, "Email already in use"));
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
          return next(createError(500, "Register Failed"));
        });
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError());
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const {
        rows: [user],
      } = await userModel.checkEmail(email);

      const valid = await compare(password, user.password);

      if (!valid) {
        return next(createError(403, "Email or password incorrect"));
      }

      delete user.password;

      const token = generateToken({
        id: user.id,
        username: user.username,
        email: user.email,
      });

      res.json({
        msg: "Login success",
        data: user,
        token: token,
      });
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError);
    }
  },
};

module.exports = userController;
