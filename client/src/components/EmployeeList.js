import React, { useContext, useState, useEffect } from "react";
import Axios from "axios";

import { EmployeeContext } from "./EmployeeContext";
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

import UpdateMenu from "./UpdateMenu";
import AlertDelete from "./AlertDelete";

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
  table: {
    minWidth: 650,
  },
});

function EmployeeList() {
  const [employeeList, setEmployeeList] = useContext(EmployeeContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, [localStorage.getItem("loggedIn")]);

  const classes = useStyles();

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/employees/delete/${id}`).then(
      (response) => {
        setEmployeeList(
          employeeList.filter((employee) => {
            return employee.id != id;
          })
        );
      }
    );
  };

  return (
    <div
      style={{
        // height: "100%",
        width: "85%",
        alignItems: "center",
      }}
    >
      <TableContainer
        component={Paper}
        style={{
          height: "75vh",
          width: "100%",
          marginTop: 50,
          marginBottom: 50,
          borderRadius: 10,
        }}
      >
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

              {loggedIn && (
                <StyledTableCell width="100">UPDATE</StyledTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {console.log(employeeList)} */}

            {employeeList.map((employee, index) => (
              // <Employee
              //   key={employee.id}
              //   first_name={employee.first_name}
              //   last_name={employee.last_name}
              //   title={employee.title}
              //   manager={employee.manager}
              //   location={employee.location}
              //   age={employee.age}
              //   salary={employee.salary}
              // />
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
                <StyledTableCell>{employee.hire_date}</StyledTableCell>
                {loggedIn && (
                  <StyledTableCell>
                    <div style={{ display: "flex" }}>
                      <UpdateMenu rowID={employee.id} />
                      <AlertDelete
                        deleteEmployee={deleteEmployee}
                        rowID={employee.id}
                      />
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
