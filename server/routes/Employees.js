const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/create", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const age = req.body.age;
  const location = req.body.location;
  const email = req.body.email;
  const phone_number = req.body.phone_number;
  const title = req.body.title;
  const salary = req.body.salary;
  const hire_date = req.body.hire_date;

  db.query(
    "INSERT INTO employees (first_name, last_name, age, location, email, phone_number, title, salary, hire_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      first_name,
      last_name,
      age,
      location,
      email,
      phone_number,
      title,
      salary,
      hire_date,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

router.put("/update", (req, res) => {
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

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
