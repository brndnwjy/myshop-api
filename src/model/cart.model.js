const pool = require("../config/db");

const cartModel = {
  insert: (data) => {
    return pool.query(
      `
    INSERT INTO cart (id, uid, title, price, quantity, description, photo, total)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `,
      [
        data.id,
        data.uid,
        data.title,
        data.price,
        data.quantity,
        data.description,
        data.photo,
        data.total,
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

  update: (cid, id) => {
    return pool.query(
      `
    UPDATE cart SET 
    hid  = COALESCE($1, id),
    status = 1
    WHERE id = $2    
    `,
      [id, cid]
    );
  },
};

module.exports = cartModel;
