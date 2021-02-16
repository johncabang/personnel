import React, { useState, useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import Axios from "axios";

import { withStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core/";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import EditIcon from "@material-ui/icons/Edit";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(() => ({
  root: {},
}))(MenuItem);

function UpdateMenu({ rowID }) {
  const [employeeList, setEmployeeList] = useContext(EmployeeContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const [newSalary, setNewSalary] = useState(0);

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
                salary: newSalary,
                hire_date: employee.hire_date,
              }
            : employee;
        })
      );
    });
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Update">
        <IconButton
          aria-controls="customized-menu"
          aria-haspopup="true"
          aria-label="edit"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ padding: 0 }}
      >
        <StyledMenuItem>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body1" style={{ marginLeft: 15 }}>
              Update
            </Typography>
            <TextField
              id="filled-update-salary"
              label="New Salary"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
              style={{ margin: 15 }}
            />
            {/* <TextField
              id="filled-update-firstname"
              label="First Name"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
              style={{ margin: 15 }}
            />
            <TextField
              id="filled-update-lastname"
              label="Last Name"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
              style={{ margin: 15 }}
            />
            <TextField
              id="filled-update-title"
              label="Title"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
              style={{ margin: 15 }}
            />
            <TextField
              id="filled-update-location"
              label="Location"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
              style={{ margin: 15 }}
            />
            <TextField
              id="filled-update-age"
              label="Age"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
              style={{ margin: 15 }}
            /> */}
          </div>
          <ListItemIcon>
            <CheckCircleIcon
              fontSize="large"
              style={{ marginLeft: 20, color: "#48BC65" }}
              onClick={() => {
                updateEmployeeSalary(rowID);
                handleClose();
              }}
              color="primary"
            />
          </ListItemIcon>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
export default UpdateMenu;
