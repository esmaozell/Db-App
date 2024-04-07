"use strict";
const express = require("express");
const dbConnection = require("./helper/mysql");

const app = express();

//check db connection
dbConnection.getConnection((err, connection) => {
  if (err) {
    console.log("Database connection error: ", err);
  } else {
    console.log("Database connected");
  }
});
