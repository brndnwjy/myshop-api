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
};

module.exports = cartController;
