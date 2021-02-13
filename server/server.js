const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const PORT = process.env.PORT || 3001;
require("dotenv").config();

app.use(cors());
app.use(express.json());

// MySQL

const db = mysql.createConnection({
  user: process.env.REACT_APP_USER,
  host: process.env.REACT_APP_HOST,
  password: process.env.REACT_APP_PASSWORD,
  database: process.env.REACT_APP_DATABASE,
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/create", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const age = req.body.age;
  const location = req.body.location;
  const title = req.body.title;
  const salary = req.body.salary;

  db.query(
    "INSERT INTO employees (first_name, last_name, age, location, title, salary) VALUES (?, ?, ?, ?, ?, ?)",
    [first_name, last_name, age, location, title, salary],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const salary = req.body.salary;
  db.query(
    "UPDATE employees SET salary = ? WHERE id = ?",
    [salary, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
