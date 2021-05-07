import React, { useContext, useState, useEffect } from "react";

import Moment from "react-moment";

import { EmployeeContext } from "../hooks/EmployeeContext";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core/";

import AlertDelete from "./AlertDelete";
import AlertUpdate from "./AlertUpdate";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  container: {
    height: "75vh",
    width: "85%",
    borderRadius: 10,
  },
});

function EmployeeList() {
  const [employeeList, setEmployeeList] = useContext(EmployeeContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, [localStorage.getItem("loggedIn")]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableContainer className={classes.container} component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="customized table"
        >
          <TableHead style={{ whiteSpace: "nowrap" }}>
            <TableRow>
              <StyledTableCell>FIRST NAME</StyledTableCell>
              <StyledTableCell>LAST NAME</StyledTableCell>
              <StyledTableCell>AGE</StyledTableCell>
              <StyledTableCell>LOCATION</StyledTableCell>
              <StyledTableCell>EMAIL</StyledTableCell>
              <StyledTableCell>PHONE NUMBER</StyledTableCell>
              <StyledTableCell>TITLE</StyledTableCell>
              <StyledTableCell>MANAGER ID</StyledTableCell>
              <StyledTableCell>SALARY</StyledTableCell>
              <StyledTableCell>HIRE DATE</StyledTableCell>
              {/* {loggedIn && <StyledTableCell width="100">EDIT</StyledTableCell>} */}
              {loggedIn && <StyledTableCell width="100"></StyledTableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {console.log(employeeList)} */}
            {employeeList.map((employee, index) => (
              // TODOS - fix key={index}
              <StyledTableRow key={index}>
                {/* {console.log(employee.id)} */}
                <StyledTableCell component="th" scope="row">
                  {employee.first_name}
                </StyledTableCell>
                <StyledTableCell>{employee.last_name}</StyledTableCell>
                <StyledTableCell>{employee.age}</StyledTableCell>
                <StyledTableCell>{employee.location}</StyledTableCell>
                <StyledTableCell>{employee.email}</StyledTableCell>
                <StyledTableCell>{employee.phone_number}</StyledTableCell>
                <StyledTableCell>{employee.title}</StyledTableCell>
                <StyledTableCell>{employee.manager}</StyledTableCell>
                <StyledTableCell>{employee.salary}</StyledTableCell>
                <StyledTableCell>
                  <Moment format="YYYY/MM/DD">{employee.hire_date}</Moment>
                </StyledTableCell>
                {loggedIn && (
                  <StyledTableCell>
                    <div style={{ display: "flex" }}>
                      <AlertUpdate rowID={employee.id} />
                      <AlertDelete rowID={employee.id} />
                    </div>
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EmployeeList;
