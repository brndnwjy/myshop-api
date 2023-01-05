const { v4: uuid } = require("uuid");
const createError = require("http-errors");
const productModel = require("../model/product.model");

const productController = {
  insert: async (req, res, next) => {
    try {
      const id = uuid();
      let photo = null;

      const data = {
        id,
        title: req.body.title,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description,
        photo,
      };

      productModel
        .insert(data)
        .then(() => {
          res.json({
            msg: "Insert product success",
            product: data,
          });
        })
        .catch((err) => {
          console.log(err);
          next(createError(500, "Insert product failed"));
        });
    } catch (err) {
      console.log(err);
      next(createError.InternalServerError());
    }
  },
};

module.exports = productController;
