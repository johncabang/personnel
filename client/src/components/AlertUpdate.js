import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { EmployeeContext } from "../hooks/EmployeeContext";
import Axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  // DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@material-ui/core/";

import Moment from "react-moment";

import EditIcon from "@material-ui/icons/Edit";
const useStyles = makeStyles((theme) => ({
  textfield: {
    margin: 10,
  },
}));
function AlertUpdate({
  rowID,
  firstName,
  lastName,
  age,
  location,
  email,
  phoneNumber,
  title,
  manager,
  salary,
  hireDate,
}) {
  const [employeeList, setEmployeeList] = useContext(EmployeeContext);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newAge, setNewAge] = useState(age);
  const [newLocation, setNewLocation] = useState(location);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
  const [newTitle, setNewTitle] = useState(title);
  const [newManager, setNewManager] = useState(manager);
  const [newSalary, setNewSalary] = useState(salary);
  const [newHireDate, setNewHireDate] = useState(
    <Moment format="YYYY-MM-DD">hireDate</Moment>
  );

  const [open, setOpen] = useState(false);

  const updateEmployee = (id) => {
    Axios.put("http://localhost:3001/employees/update", {
      id: id,
      first_name: newFirstName,
      last_name: newLastName,
      age: newAge,
      location: newLocation,
      email: newEmail,
      phone_number: newPhoneNumber,
      title: newTitle,
      manager: newManager,
      salary: newSalary,
      hire_date: newHireDate,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((employee) => {
          return employee.id == id
            ? {
                id: employee.id,
                first_name: newFirstName,
                last_name: newLastName,
                age: newAge,
                location: newLocation,
                email: newEmail,
                phone_number: newPhoneNumber,
                title: newTitle,
                manager: newManager,
                salary: newSalary,
                hire_date: newHireDate,
              }
            : employee;
        })
      );
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tooltip title="Edit ">
        <IconButton
          aria-controls="customized-menu"
          aria-haspopup="true"
          aria-label="update"
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Edit employee information
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description">
            Update employee?
          </DialogContentText> */}
          <TextField
            required
            id="filled-required-firstname"
            label="First Name"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setNewFirstName(event.target.value);
            }}
            className={classes.textfield}
          />
          <TextField
            required
            id="filled-required-lastname"
            label="Last Name"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setNewLastName(event.target.value);
            }}
            className={classes.textfield}
          />
          <TextField
            required
            id="filled-number-age"
            label="Age"
            type="number"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setNewAge(event.target.value);
            }}
            className={classes.textfield}
          />
          <TextField
            required
            id="filled-required-location"
            label="Location"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setNewLocation(event.target.value);
            }}
            className={classes.textfield}
          />
          <TextField
            required
            id="filled-required-email"
            label="Email"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setNewEmail(event.target.value);
            }}
            className={classes.textfield}
          />
          <TextField
            required
            id="filled-required-phonenumber"
            label="Phone Number"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setNewPhoneNumber(event.target.value);
            }}
            className={classes.textfield}
          />
          <TextField
            required
            id="filled-required-title"
            label="Title"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setNewTitle(event.target.value);
            }}
            className={classes.textfield}
          />
          <TextField
            required
            id="filled-required-manager"
            label="Manager ID"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setNewManager(event.target.value);
            }}
            className={classes.textfield}
          />
          <TextField
            required
            id="filled-number-salary"
            label="Salary"
            type="number"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setNewSalary(event.target.value);
            }}
            className={classes.textfield}
          />

          {/* TODOS - FIX INCORRECT DATE VALUE */}
          <TextField
            required
            id="filled-required-hiredate"
            label="Hire Date"
            type="date"
            variant="outlined"
            defaultValue={"2021-01-01"}
            size="small"
            onChange={(event) => {
              setNewHireDate(event.target.value);
            }}
            className={classes.textfield}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              updateEmployee(rowID);
              handleClose();
            }}
            color="secondary"
            autoFocus
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertUpdate;
