const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 100,
  host: "lab-db.cdememeakr15.eu-west-1.rds.amazonaws.com",
  user: "admin",
  password: "UXMo2rR8Oe4GVU7mh6Dp",
  database: "lab-db",
});

module.exports = connection;
