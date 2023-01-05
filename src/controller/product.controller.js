const { v4: uuid } = require("uuid");
const createError = require("http-errors");
const productModel = require("../model/product.model");
const pool = require("../config/db");

const productController = {
  insert: (req, res, next) => {
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
  },

  getAll: (req, res, next) => {
    productModel
      .getAll()
      .then((data) => {
        res.json({
          msg: "Get products success",
          products: data.rows,
        });
      })
      .catch((err) => {
        console.log(err);
        next(createError(500, "Get products failed"));
      });
  },

  getDetail: (req, res, next) => {
    const { id } = req.params;

    productModel
      .getDetail(id)
      .then((data) => {
        res.json({
          msg: "Get product detail success",
          product: data.rows[0],
        });
      })
      .catch((err) => {
        console.log(err);
        next(createError(500, "Get product detail failed"));
      });
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      let photo = null;

      const data = {
        id,
        title: req.body.title,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description,
        photo,
      };

      await productModel.update(data);

      const {
        rows: [product],
      } = await productModel.getDetail(id);

      res.json({
        msg: "Update product success",
        product,
      });
    } catch (err) {
      console.log(err);
      next(createError(500, "Update product failed"));
    }
  },

  remove: async (req, res, next) => {
    try {
      const { id } = req.params;

      const {
        rows: [product],
      } = await productModel.getDetail(id);

      await productModel.remove(id);

      res.json({
        msg: "Delete product success",
        product,
      });
    } catch (err) {
      console.log(err);
      next(createError(500, "Delete product failed"));
    }
  },
};

module.exports = productController;
