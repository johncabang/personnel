import React, { useContext } from "react";
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
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
// import Employee from "./Employee";

function EmployeeList() {
  const [employeeList] = useContext(EmployeeContext);
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      style={{ width: "80%", marginTop: 50, marginBottom: 50 }}
    >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>FIRST NAME</StyledTableCell>
            <StyledTableCell>LAST NAME</StyledTableCell>
            <StyledTableCell>TITLE</StyledTableCell>
            <StyledTableCell>LOCATION</StyledTableCell>
            <StyledTableCell>AGE</StyledTableCell>
            <StyledTableCell>SALARY</StyledTableCell>
            <StyledTableCell width="100"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList.map((employee) => (
            // <Employee
            //   key={employee.id}
            //   first_name={employee.first_name}
            //   last_name={employee.last_name}
            //   title={employee.title}
            //   location={employee.location}
            //   age={employee.age}
            //   salary={employee.salary}
            // />

            <StyledTableRow key={employee.id}>
              <StyledTableCell component="th" scope="row">
                {employee.first_name}
              </StyledTableCell>
              <StyledTableCell>{employee.last_name}</StyledTableCell>
              <StyledTableCell>{employee.title}</StyledTableCell>
              <StyledTableCell>{employee.location}</StyledTableCell>
              <StyledTableCell>{employee.age}</StyledTableCell>
              <StyledTableCell>{employee.salary}</StyledTableCell>

              {/* <StyledTableCell>
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
              </StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmployeeList;
