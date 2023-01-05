const { v4: uuid } = require("uuid");
const createError = require("http-errors");
const productModel = require("../model/product.model");
const pool = require("../config/db");

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

      await productModel.insert(data);

      res.json({
        msg: "Insert product success",
        product: data,
      });
    } catch (err) {
      console.log(err);
      next(createError(500, "Insert product failed"));
    }
  },

  getAll: async (req, res, next) => {
    try {
      const {
        rows: [{ total }],
      } = await productModel.count();

      if (parseInt(total) < 1) {
        res.json({
          msg: "There is no product to show",
        });
      }

      const { rows: products } = await productModel.getAll();

      res.json({
        msg: "Get all products success",
        products,
      });
    } catch (err) {
      console.log(err);
      next(createError(500, "Get all products failed"));
    }
  },

  getDetail: async (req, res, next) => {
    try {
      const { id } = req.params;

      const {
        rows: [product],
      } = await productModel.getDetail(id);

      res.json({
        msg: "Get product detail success",
        product,
      });
    } catch (err) {
      console.log(err);
      next(createError(500, "Get product detail failed"));
    }
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
