const mysql = require("mysql");
require("dotenv").config();

// MySQL

const db = mysql.createConnection({
  user: process.env.REACT_APP_USER,
  host: process.env.REACT_APP_HOST,
  password: process.env.REACT_APP_PASSWORD,
  database: process.env.REACT_APP_DATABASE,
});

module.exports = db;
