const pool = require("../config/db");

const productModel = {
  // get product
  getAll: (search) => {
    return pool.query(`SELECT * FROM product WHERE title ILIKE '%${search}%'`);
  },

  // count product
  count: () => {
    return pool.query("SELECT COUNT(*) AS total FROM product");
  },

  // get product detail
  getDetail: (id) => {
    return pool.query("SELECT * FROM product WHERE id = $1", [id]);
  },

  // insert new product
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

  // update product
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

  // remove product
  remove: (id) => {
    return pool.query("DELETE FROM product WHERE id = $1", [id]);
  },

  // update product stock after checkout
  checkout: (pid, quantity) => {
    return pool.query(
      `
    UPDATE product SET stock = (stock - $1) WHERE id = $2
    `,
      [quantity, pid]
    );
  },
};

module.exports = productModel;
