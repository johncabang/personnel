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
                  {/* <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteEmployee(row.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton> */}
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

// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
// } from "@material-ui/core/";

// const columns = [
//   { id: "first_name", label: "First Name", minWidth: 100 },
//   { id: "last_name", label: "Last Name", minWidth: 100 },
//   { id: "title", label: "Title", minWidth: 100 },
//   {
//     id: "location",
//     label: "Location",
//     minWidth: 100,
//     align: "left",
//   },
//   {
//     id: "age",
//     label: "Age",
//     minWidth: 50,
//     align: "left",
//   },
//   {
//     id: "salary",
//     label: "Salary",
//     minWidth: 100,
//     align: "left",
//   },
//   {
//     id: "edit",
//     label: "Edit",
//     minWidth: 100,
//     align: "left",
//   },
// ];

// const useStyles = makeStyles({
//   root: {
//     width: "80%",
//     marginTop: 50,
//     marginBottom: 150,
//   },
//   container: {
//     maxHeight: 440,
//   },
// });

// function DataTable({ employeeList }) {
//   const classes = useStyles();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper className={classes.root}>
//       <TableContainer className={classes.container}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <>
//                   <TableCell
//                     key={column.id}
//                     align={column.align}
//                     style={{ minWidth: column.minWidth }}
//                   >
//                     {column.label}
//                   </TableCell>
//                 </>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {employeeList
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, key) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={key}>
//                     {columns.map((column, key) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={key} align={column.align}>
//                           {column.format && typeof value === "number"
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={employeeList.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onChangePage={handleChangePage}
//         onChangeRowsPerPage={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }

// export default DataTable;
