const { v4: uuid } = require("uuid");
const createError = require("http-errors");
const cloudinary = require("../helper/cloudinary");

const productModel = require("../model/product.model");

const productController = {
  // get product
  getAll: async (req, res, next) => {
    try {
      const search = req.query.search || "";

      const {
        rows: [{ total }],
      } = await productModel.count();

      if (parseInt(total) < 1) {
        res.json({
          msg: "There is no product to show",
        });
      }

      const { rows: products } = await productModel.getAll(search);

      res.json({
        msg: "Get all products success",
        products,
      });
    } catch (err) {
      console.log(err);
      next(createError(500, "Get all products failed"));
    }
  },

  // get product detail by id
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

  // insert new product
  insert: async (req, res, next) => {
    try {
      const id = uuid();
      let photo = null;

      if (req.file) {
        photo = await cloudinary.uploader.upload(req.file.path);
      }

      const data = {
        id,
        title: req.body.title,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description,
        photo: photo.secure_url,
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

  // update product
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      let photo;
      let data = {
        id,
        title: req.body.title,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description,
        photo,
      };

      if (req.file) {
        photo = await cloudinary.uploader.upload(req.file.path);
        data = {
          ...data,
          photo: photo.secure_url,
        };
      }

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

  // remove product
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
