import Axios from "axios";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { EmployeeContext } from "../hooks/EmployeeContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core/";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    background: "white",
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 50,
    width: "85%",
  },
}));

function AddEmployee() {
  const history = useHistory();

  const [employeeList, setEmployeeList] = useContext(EmployeeContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [title, setTitle] = useState("");
  const [manager, setManager] = useState("");
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
      manager: manager,
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
          manager: manager,
          salary: salary,
          hire_date: hireDate,
        },
      ]);
      history.push("/");
    });
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="body1"
          style={{
            color: "white",
            background: "black",
            padding: 10,
            paddingLeft: 14,
            width: "85%",
            marginTop: 40,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            fontSize: 12,
          }}
        >
          ADD NEW EMPLOYEE
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card className={classes.form}>
          <CardHeader subheader="ADD NEW EMPLOYEE" />
          <CardContent>
            <form noValidate autoComplete="off">
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
                  id="filled-required-manager"
                  label="Manager ID"
                  variant="outlined"
                  size="small"
                  onChange={(event) => {
                    setManager(event.target.value);
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
                  required
                  id="filled-required-hiredate"
                  label="Hire Date"
                  type="date"
                  variant="outlined"
                  defaultValue="2021-01-01"
                  size="small"
                  onChange={(event) => {
                    setHireDate(event.target.value);
                  }}
                />
              </div>
              {/* <Tooltip title="Add Employee"> */}
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<PersonAddIcon />}
                onClick={addEmployee}
                style={{
                  marginTop: 20,
                  marginLeft: 8,
                  borderRadius: 5,
                }}
              >
                <Typography variant="body2">Add Employee</Typography>
              </Button>
              {/* </Tooltip> */}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AddEmployee;
