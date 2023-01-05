const { v4: uuid } = require("uuid");
const createError = require("http-errors");
const cartModel = require("../model/cart.model");

const cartController = {
  insert: async (req, res, next) => {
    try {
      const id = uuid();
      let photo = null;

      const { uid, title, price, quantity, description } = req.body;

      const data = {
        id,
        uid,
        title,
        price,
        quantity,
        description,
        photo,
      };

      await cartModel.insert(data);

      res.json({
        msg: "Insert cart success",
        product: data,
      });
    } catch (err) {
      console.log(err);
      next(createError(500, "Insert cart failed"));
    }
  },

  getAll: async (req, res, next) => {
    try {
      const { uid } = req.body;

      const {
        rows: [{ total }],
      } = await cartModel.count(uid);

      if (parseInt(total) < 1) {
        res.json({
          msg: "There is nothing in your cart",
        });
      }

      const { rows: cart } = await cartModel.getAll(uid);

      res.json({
        msg: "Get cart success",
        cart,
      });
    } catch (err) {
      console.log(err);
      next(createError(500, "Get cart failed"));
    }
  },

  remove: async (req, res, next) => {
    try {
      const { id } = req.params;

      const {
        rows: [cart],
      } = await cartModel.getDetail(id);

      await cartModel.remove(id);

      res.json({
        msg: "Remove cart success",
        cart,
      });
    } catch (err) {
      console.log(err);
      next(createError(500, "Remove cart failed"));
    }
  },
};

module.exports = cartController;
