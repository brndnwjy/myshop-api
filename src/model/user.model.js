const pool = require("../config/db");

const userModel = {
  // auth
  register: (data) => {
    return pool.query(
      `
      INSERT INTO users (id, username, email, password)
      VALUES ($1, $2, $3, $4)
      `,
      [data.id, data.username, data.email, data.password]
    );
  },

  checkEmail: (email) => {
    return pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
  },
};

module.exports = userModel;
