const pool = require("../config/db");

const cartModel = {
  insert: (data) => {
    return pool.query(
      `
    INSERT INTO cart (id, uid, title, price, quantity, description, photo)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
      [
        data.id,
        data.uid,
        data.title,
        data.price,
        data.quantity,
        data.description,
        data.photo,
      ]
    );
  },
};

module.exports = cartModel;
