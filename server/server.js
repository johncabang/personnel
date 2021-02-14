const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const employeesRoute = require("./routes/Employees");
app.use("/employees", employeesRoute);
app.use("/create", employeesRoute);
app.use("/update", employeesRoute);
app.use("/delete", employeesRoute);

const usersRoute = require("./routes/Users");
app.use("/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
