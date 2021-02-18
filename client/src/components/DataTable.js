// import React, { useEffect } from "react";
// import Axios from "axios";

// import { withStyles, makeStyles } from "@material-ui/core/styles";
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@material-ui/core/";

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function DataTable({
//   DeleteMenu,
//   deleteEmployee,
//   employeeList,
//   setEmployeeList,
//   setNewSalary,
//   UpdateMenu,
//   updateEmployeeSalary,
// }) {
//   useEffect(() => {
//     Axios.get("http://localhost:3001/employees").then((response) => {
//       setEmployeeList(response.data);
//     });
//   }, []);

//   const classes = useStyles();

//   return (
//     <TableContainer
//       component={Paper}
//       style={{ width: "70%", marginBottom: 50 }}
//     >
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>FIRST NAME</StyledTableCell>
//             <StyledTableCell>LAST NAME</StyledTableCell>
//             <StyledTableCell>TITLE</StyledTableCell>
//             <StyledTableCell>LOCATION</StyledTableCell>
//             <StyledTableCell>AGE</StyledTableCell>
//             <StyledTableCell>SALARY</StyledTableCell>
//             <StyledTableCell width="100"></StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {employeeList.map((employee) => (
//             <StyledTableRow key={employee.id}>
//               <StyledTableCell component="th" scope="row">
//                 {employee.first_name}
//               </StyledTableCell>
//               <StyledTableCell>{employee.last_name}</StyledTableCell>
//               <StyledTableCell>{employee.title}</StyledTableCell>
//               <StyledTableCell>{employee.location}</StyledTableCell>
//               <StyledTableCell>{employee.age}</StyledTableCell>
//               <StyledTableCell>{employee.salary}</StyledTableCell>
//               <StyledTableCell>
//                 <div style={{ display: "flex" }}>
//                   <UpdateMenu
//                     setNewSalary={setNewSalary}
//                     updateEmployeeSalary={updateEmployeeSalary}
//                     rowID={employee.id}
//                   />
//                   <DeleteMenu
//                     deleteEmployee={deleteEmployee}
//                     rowID={employee.id}
//                   />
//                 </div>
//               </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default DataTable;
