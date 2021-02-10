// Update with your config settings.

const knex = require("knex");
const database = knex({
  client: "pg",
  connection: {
    connectionString:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}:${process.env.PW}@127.0.0.1:5432/doggyplace`,
    ssl: process.env.HAS_SSL ? { rejectUnauthorized: false } : undefined,
  },
  searchPath: "public",
  migrations: {
    directory: `${__dirname}/migrations`,
  },
});
module.exports = database;

// module.exports = {
//   client: "pg",
//   connection: {
//     connectionString:
//       process.env.DATABASE_URL ||
//       `postgres://${process.env.USER}:${process.env.PW}@127.0.0.1:5432/doggyplace`,
//     ssl: process.env.HAS_SSL ? { rejectUnauthorized: false } : undefined,
//   },
//   searchPath: "public",
//   migrations: {
//     directory: `${__dirname}/migrations`,
//   },
// };

// const config = {
//     client: "pg",
//     connection: {
//       connectionString:
//         process.env.DATABASE_URL ||
//         `postgres://${process.env.USER}:${process.env.PW}@127.0.0.1:5432/colorname`,
//       ssl: process.env.HAS_SSL ? { rejectUnauthorized: false } : undefined,
//     },
//     migrations: {
//       directory: "../cc17-colorname/db/migrations",
//     },
//     seeds: {
//       directory: "../cc17-colorname/db/seeds",
//     },
//     searchPath: "public",
//   };
//   module.exports = config;

/*
If I get an error like "Failed to resolve config file, knex cannot determine where to generate migrations"
I need to try to move my knex config file to the root level. If I am still stuck, I should check the directory address.
This error is because knex is not finding the migrations folder.
*/
