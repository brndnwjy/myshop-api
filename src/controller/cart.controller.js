const { v4: uuid } = require("uuid");
const createError = require("http-errors");

const cartModel = require("../model/cart.model");

const cartController = {
  // get cart
  getAll: async (req, res, next) => {
    try {
      const { uid } = req.params;

      const {
        rows: [{ total }],
      } = await cartModel.count(uid);

      if (parseInt(total) < 1) {
        return res.json({
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

  // insert to cart
  insert: async (req, res, next) => {
    try {
      const id = uuid();
      const { pid, uid, title, price, quantity, description, photo } = req.body;

      const data = {
        id,
        pid,
        uid,
        title,
        price,
        quantity,
        description,
        photo,
        total: price * quantity,
      };

      await cartModel.insert(data);

      res.json({
        msg: "Insert cart success",
        product: { data },
      });
    } catch (err) {
      console.log(err);
      next(createError(500, "Insert cart failed"));
    }
  },

  // remove from cart
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
