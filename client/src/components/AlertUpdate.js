import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { EmployeeContext } from "./EmployeeContext";
import Axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@material-ui/core/";

import EditIcon from "@material-ui/icons/Edit";
const useStyles = makeStyles((theme) => ({
  textfield: {
    margin: 10,
  },
}));
function AlertUpdate({ rowID }) {
  const [employeeList, setEmployeeList] = useContext(EmployeeContext);
  const [newSalary, setNewSalary] = useState(0);

  const [open, setOpen] = useState(false);

  const updateEmployeeSalary = (id) => {
    Axios.put("http://localhost:3001/employees/update", {
      salary: newSalary,
      id: id,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((employee) => {
          return employee.id == id
            ? {
                id: employee.id,
                first_name: employee.first_name,
                last_name: employee.last_name,
                age: employee.age,
                location: employee.location,
                email: employee.email,
                phone_number: employee.phone_number,
                title: employee.title,
                manager: employee.manager,
                salary: newSalary,
                hire_date: employee.hire_date,
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
      <Tooltip title="Update ">
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
        <DialogTitle id="alert-dialog-title">Update employee</DialogTitle>
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
              setNewSalary(event.target.value);
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
              setNewSalary(event.target.value);
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
              setNewSalary(event.target.value);
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
              setNewSalary(event.target.value);
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
              setNewSalary(event.target.value);
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
              setNewSalary(event.target.value);
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
              setNewSalary(event.target.value);
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
              setNewSalary(event.target.value);
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
          <TextField
            required
            id="filled-required-hiredate"
            label="Hire Date"
            type="date"
            variant="outlined"
            defaultValue="2021-01-01"
            size="small"
            onChange={(event) => {
              setNewSalary(event.target.value);
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
              updateEmployeeSalary(rowID);
              handleClose();
            }}
            color="primary"
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
