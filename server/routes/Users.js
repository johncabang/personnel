const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO Users (email, password) VALUES (?, ?)",
    [email, password],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM Users WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.log(err);
    }
    if (results.length > 0) {
      if (password === results[0].password) {
        res.send("You are logged in.");
      } else {
        res.send("Wrong email/password.");
      }
    } else {
      res.send("User doesn't exist.");
    }
  });
});

module.exports = router;
