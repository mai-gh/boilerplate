const Sequelize = require("sequelize");
const pkg = require("../../package.json");
const dbName = pkg.name;

console.log(`Opening database connection to ${dbName}`);
const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`, {
  logging: false,
});


// IMPORT / REQUIRE MODELS HERE

// PUT RELATIONS / ASSOCIATIONS HERE


// REMEMBER TO EXPORT MODELS HERE
module.exports = {
  db,
};

