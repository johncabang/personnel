const express = require("express");
const router = express.Router();
require("dotenv").config();

// Access database
const db = require("../config/db");

// Bcrypt is a method for salt and hashing passwords
const bcrypt = require("bcrypt");
// A salt is a random string that makes the hash unpredictable
const saltRounds = 10;

const jwt = require("jsonwebtoken");

// Register User

router.post("/register", (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;
  const { email, password } = req.body;

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
  // const email = req.body.email;
  // const password = req.body.password;
  const { email, password } = req.body;

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
          // Send to Client/Front-end
          // 1) if user is authorized
          // 2) token
          // 3) results
          res.json({ auth: true, token: token, results: results });
        } else {
          res.json({
            auth: false,
            message: "The password you enetered is incorrect",
          });
        }
      });
    } else {
      res.json({
        auth: false,
        message: "Couldn't find your Personnel Account",
      });
    }
  });
});

// Middleware
// VERIFY if user/email has correct webtoken

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.send("We need a token, please give it to us next time.");
  } else {
    jwt.verify(token, "JWT_SECRET", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "You failed to Authenticate" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

// Check if user/emain is authenticated

router.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("You are authenticated.");
});

module.exports = router;
