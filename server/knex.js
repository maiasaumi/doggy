const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DATABASE_URL,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
  },
});

module.exports = knex;
