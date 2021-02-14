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
        res.send("Values Inserted");
      }
    }
  );
});

module.exports = router;
