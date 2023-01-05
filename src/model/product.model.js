const pool = require("../config/db");

const productModel = {
  insert: (data) => {
    return pool.query(
      `
    INSERT INTO product (id, title, price, stock, description, photo)
    VALUES($1, $2, $3, $4, $5, $6)
    `,
      [
        data.id,
        data.title,
        data.price,
        data.stock,
        data.description,
        data.photo,
      ]
    );
  },

  getAll: () => {
    return pool.query("SELECT * FROM product");
  },

  count: () => {
    return pool.query("SELECT COUNT(*) AS total FROM product");
  },

  getDetail: (id) => {
    return pool.query("SELECT * FROM product WHERE id = $1", [id]);
  },

  update: (data) => {
    return pool.query(
      `
      UPDATE product SET 
      title = COALESCE($1, title),       
      price = COALESCE($2, price),       
      stock = COALESCE($3, stock),       
      description = COALESCE($4, description),       
      photo = COALESCE($5, photo)
      WHERE id = $6   
      `,
      [
        data.title,
        data.price,
        data.stock,
        data.description,
        data.photo,
        data.id,
      ]
    );
  },

  remove: (id) => {
    return pool.query("DELETE FROM product WHERE id = $1", [id]);
  },
};

module.exports = productModel;
