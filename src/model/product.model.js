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
};

module.exports = productModel;
