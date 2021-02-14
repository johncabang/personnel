// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@material-ui/core/";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function Employee({ id, first_name, last_name, title, location, age, salary }) {
//   const classes = useStyles();

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <TableContainer component={Paper} style={{ width: "70%" }}>
//         <Table className={classes.table} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>First Name</TableCell>
//               <TableCell>Last Name</TableCell>
//               <TableCell>Title</TableCell>
//               <TableCell>Location</TableCell>
//               <TableCell>Age</TableCell>
//               <TableCell>Salary</TableCell>
//               <TableCell width="100"></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow key={id}>
//               <TableCell component="th" scope="row">
//                 {first_name}
//               </TableCell>
//               <TableCell>{last_name}</TableCell>
//               <TableCell>{title}</TableCell>
//               <TableCell>{location}</TableCell>
//               <TableCell>{age}</TableCell>
//               <TableCell>{salary}</TableCell>
//               <TableCell></TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// export default Employee;
