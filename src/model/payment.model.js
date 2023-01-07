const pool = require("../config/db");

const paymentModel = {
  createHistory: (id, uid) => {
    return pool.query(
      `
        INSERT INTO history (id, uid)
        VALUES ($1, $2)`,
      [id, uid]
    );
  },
};

module.exports = paymentModel;
