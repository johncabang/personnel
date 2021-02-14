import React, { useEffect } from "react";
import Axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core/";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function DataTable({
  employeeList,
  setEmployeeList,
  updateEmployeeSalary,
  deleteEmployee,
  DeleteMenu,
  UpdateMenu,
  setNewSalary,
}) {
  useEffect(() => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  }, []);

  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      style={{ width: "70%", marginBottom: 50 }}
    >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Salary</TableCell>
            <TableCell align="left" width="100"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell component="th" scope="row">
                {employee.first_name}
              </TableCell>
              <TableCell align="left">{employee.last_name}</TableCell>
              <TableCell align="left">{employee.title}</TableCell>
              <TableCell align="left">{employee.location}</TableCell>
              <TableCell align="left">{employee.age}</TableCell>
              <TableCell align="left">{employee.salary}</TableCell>
              <TableCell align="left">
                <div style={{ display: "flex" }}>
                  <UpdateMenu
                    setNewSalary={setNewSalary}
                    updateEmployeeSalary={updateEmployeeSalary}
                    rowID={employee.id}
                  />
                  <DeleteMenu
                    deleteEmployee={deleteEmployee}
                    rowID={employee.id}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
