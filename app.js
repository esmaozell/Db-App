"use strict";
const express = require("express");
const dbConnection = require("./helper/mysql");

const app = express();

app.get("/Students", (req, res) => {
  dbConnection.query("SELECT * FROM Students", (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
      res.status(200).json({
        status: "success",
        data: results,
      });
    }
  });
});

app.get("/Students/Add/:name/:age/:midterm_grade/:final_grade", (req, res) => {
  dbConnection.query("INSERT INTO Students (name, age,   midterm_Grade, final_Grade) VALUES (?, ?, ?, ?)",
  [req.params.name, req.params.age, req.params.midterm_grade, req.params.final_grade], (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
      res.status(200).json({
        status: "success",
        data: results,
      });
    }
  });
});

app.delete("/Students/Delete/:id", (req, res) => {
  dbConnection.query("DELETE FROM Students WHERE id = ?",
  [req.params.id], (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
      res.status(200).json({
        status: "success",
        data: results,
      });
    }
  });
});

//check db connection
dbConnection.getConnection((err, connection) => {
  if (err) {
    console.log("Database connection error: ", err);
  } else {
    console.log("Database connected");
  }
});
 
app.listen(3000,() => {
  console.log("3000 çalıştı");
});