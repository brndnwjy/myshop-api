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

  getAll: (uid) => {
    return pool.query("SELECT * FROM cart WHERE uid = $1", [uid]);
  },

  count: (uid) => {
    return pool.query("SELECT COUNT(*) AS total FROM cart WHERE uid = $1", [
      uid,
    ]);
  },

  getDetail: (id) => {
    return pool.query("SELECT * FROM cart WHERE id = $1", [id]);
  },

  remove: (id) => {
    return pool.query("DELETE FROM cart WHERE id = $1", [id]);
  },
};

module.exports = cartModel;
