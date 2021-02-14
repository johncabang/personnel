import React, { useContext } from "react";
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
import DeleteMenu from "./DeleteMenu";
import UpdateMenu from "./UpdateMenu";

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
  const [employeeList, setEmployeeList] = useContext(EmployeeContext);
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
          {/* {console.log(employeeList)} */}

          {employeeList.map((employee, index) => (
            // <Employee
            //   key={employee.id}
            //   first_name={employee.first_name}
            //   last_name={employee.last_name}
            //   title={employee.title}
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
              <StyledTableCell>{employee.title}</StyledTableCell>
              <StyledTableCell>{employee.location}</StyledTableCell>
              <StyledTableCell>{employee.age}</StyledTableCell>
              <StyledTableCell>{employee.salary}</StyledTableCell>
              <StyledTableCell>
                <div style={{ display: "flex" }}>
                  <UpdateMenu rowID={employee.id} />
                  <DeleteMenu
                    deleteEmployee={deleteEmployee}
                    rowID={employee.id}
                  />
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmployeeList;
