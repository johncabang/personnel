import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(first_name, last_name, title, location, age, salary) {
  return { first_name, last_name, title, location, age, salary };
}

const rows = [
  createData("John", "Cabang", "Web Developer", "Toronto", 40, 80000),
  createData("Dianne", "Cabang", "UX Writer", "Toronto", 39, 120000),
  createData("Danica", "Cabang", "Artist", "Toronto", 9, 70000),
  createData("Stella", "Cabang", "Happy Girl", "Toronto", 5, 65000),
];

function DataTable({
  employeeList,
  updateEmployeeSalary,
  deleteEmployee,
  DeleteMenu,
  UpdateMenu,
  setNewSalary,
}) {
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      style={{ width: "80%", marginBottom: 150 }}
    >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Salary</TableCell>
            <TableCell align="left">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList.map((row, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell align="left">{row.last_name}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.location}</TableCell>
              <TableCell align="left">{row.age}</TableCell>
              <TableCell align="left">{row.salary}</TableCell>
              <TableCell align="left">
                <div style={{ display: "flex" }}>
                  <UpdateMenu
                    setNewSalary={setNewSalary}
                    updateEmployeeSalary={updateEmployeeSalary}
                    rowID={row.id}
                  />
                  <DeleteMenu deleteEmployee={deleteEmployee} rowID={row.id} />
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
