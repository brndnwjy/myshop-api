const pool = require("../config/db");

const cartModel = {
  // get cart
  getAll: (uid) => {
    return pool.query("SELECT * FROM cart WHERE uid = $1", [uid]);
  },

  // count cart
  count: (uid) => {
    return pool.query("SELECT COUNT(*) AS total FROM cart WHERE uid = $1", [
      uid,
    ]);
  },

  // get cart detail
  getDetail: (id) => {
    return pool.query("SELECT * FROM cart WHERE id = $1", [id]);
  },

  // insert to cart
  insert: (data) => {
    return pool.query(
      `
    INSERT INTO cart (id, pid, uid, title, price, quantity, description, photo, total)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `,
      [
        data.id,
        data.pid,
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

  // remove from cart
  remove: (id) => {
    return pool.query("DELETE FROM cart WHERE id = $1", [id]);
  },

  // update cart status
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
