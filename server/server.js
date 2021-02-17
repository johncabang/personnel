const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "session",
    secret: "abcdefghijklmnopqrstuvwxyz",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const usersRoute = require("./routes/Users");
app.use("/users", usersRoute);

const employeesRoute = require("./routes/Employees");
app.use("/employees", employeesRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
