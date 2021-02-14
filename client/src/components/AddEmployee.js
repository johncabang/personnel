import { useState, useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core/";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
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
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState(0);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      first_name: firstName,
      last_name: lastName,
      age: age,
      location: location,
      title: title,
      salary: salary,
    }).then(() => {
      setEmployeeList((prevEmployeeList) => [
        ...prevEmployeeList,
        {
          first_name: firstName,
          last_name: lastName,
          age: age,
          location: location,
          title: title,
          salary: salary,
        },
      ]);
    });
  };

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{ display: "flex", flexDirection: "row" }}>
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
          id="filled-number-salary"
          label="Salary"
          type="number"
          variant="outlined"
          size="small"
          onChange={(event) => {
            setSalary(event.target.value);
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
          marginTop: 50,
          borderRadius: 30,
        }}
      >
        Add Employee
      </Button>
    </form>
  );
}

export default AddEmployee;
