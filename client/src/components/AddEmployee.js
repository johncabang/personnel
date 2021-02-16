import Axios from "axios";
import { useState, useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core/";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    background: "white",
    padding: 20,
    borderRadius: 10,
    marginTop: 50,
    width: "80%",
  },
}));

function AddEmployee() {
  const [employeeList, setEmployeeList] = useContext(EmployeeContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState(0);
  const [hireDate, setHireDate] = useState(0);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/employees/create", {
      first_name: firstName,
      last_name: lastName,
      age: age,
      location: location,
      email: email,
      phone_number: phoneNumber,
      title: title,
      salary: salary,
      hire_date: hireDate,
    }).then(() => {
      setEmployeeList((prevEmployeeList) => [
        ...prevEmployeeList,
        {
          first_name: firstName,
          last_name: lastName,
          age: age,
          location: location,
          email: email,
          phone_number: phoneNumber,
          title: title,
          salary: salary,
          hire_date: hireDate,
        },
      ]);
    });
  };

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: 0,
        }}
      >
        <div>
          <TextField
            required
            id="filled-required-firstname"
            label="First Name"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <TextField
            required
            id="filled-required-lastname"
            label="Last Name"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <TextField
            required
            id="filled-number-age"
            label="Age"
            type="number"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
          <TextField
            required
            id="filled-required-location"
            label="Location"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
          <TextField
            required
            id="filled-required-email"
            label="Email"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            required
            id="filled-required-phonenumber"
            label="Phone Number"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
          <TextField
            required
            id="filled-required-title"
            label="Title"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />

          <TextField
            required
            id="filled-number-salary"
            label="Salary"
            type="number"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setSalary(event.target.value);
            }}
          />
          <TextField
            id="filled-required-hiredate"
            label="Hire Date"
            type="date"
            defaultValue="2021-01-01"
            size="small"
            onChange={(event) => {
              setHireDate(event.target.value);
            }}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<PersonAddIcon />}
          onClick={addEmployee}
          style={{
            marginTop: 20,
            borderRadius: 30,
            width: 200,
          }}
        >
          Add Employee
        </Button>
      </div>
    </form>
  );
}

export default AddEmployee;
