const express = require("express");
const router = express.Router();
require("dotenv").config();

const db = require("../config/db");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");

// Register User

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  // const email = req.body.email;
  // const password = req.body.password;

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

// Login User

router.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // const email = req.body.email;
  // const password = req.body.password;

  db.query("SELECT * FROM Users WHERE email = ?", [email], (err, results) => {
    if (err) {
      res.send({ err: err });
      // console.log(err);
    }
    if (results.length > 0) {
      bcrypt.compare(password, results[0].password, (error, response) => {
        if (response) {
          // console.log("Backend - Users.js" + req.session.user);
          const id = results[0].id;
          const token = jwt.sign({ id }, "JWT_SECRET", {
            expiresIn: 300, // Realtime is 5 minutes
          });
          req.session.user = results;

          res.json({ auth: true, token: token, results: results });
        } else {
          res.json({ auth: false, message: "Wrong email/password." });
        }
      });
    } else {
      res.json({ auth: false, message: "No email exists." });
    }
  });
});

// Middleware

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("We need a token, please give it to us next time.");
  } else {
    jwt.verify(token, "JWT_SECRET", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "You failed to authenticate" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

router.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("You are authenticated.");
});

module.exports = router;
