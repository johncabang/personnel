const express = require("express");
const router = express.Router();

const db = require("../config/db");

const bcrypt = require("bcrypt");
const saltRounds = 10;

// Register User

router.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO Users (email, password) VALUES (?, ?)",
      [email, hash],
      (err, results) => {
        console.log(err);
      }
    );
  });
});

router.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

// Login User

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM Users WHERE email = ?", [email], (err, results) => {
    if (err) {
      res.send({ err: err });
      // console.log(err);
    }
    if (results.length > 0) {
      bcrypt.compare(password, results[0].password, (error, response) => {
        if (response) {
          req.session.user = results;
          console.log(req.session.user);
          res.send(results);
        } else {
          res.send({ message: "Wrong email/password" });
        }
      });
    } else {
      res.send({ message: "User doesn't exist" });
    }
  });
});

module.exports = router;
