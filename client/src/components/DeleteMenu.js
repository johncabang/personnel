import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@material-ui/core/";

import DeleteIcon from "@material-ui/icons/Delete";

function DeleteMenu({ deleteEmployee, rowID }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Remove Employee">
        <IconButton
          aria-controls="customized-menu"
          aria-haspopup="true"
          aria-label="delete"
          variant="contained"
          color="secondary"
          onClick={handleClickOpen}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete employee?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deleting an employee is permanent. Are you sure you want to
            continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              deleteEmployee(rowID);
            }}
            color="primary"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteMenu;

// import React, { useState } from "react";
// import { withStyles } from "@material-ui/core/styles";
// import {
//   IconButton,
//   Menu,
//   MenuItem,
//   // ListItemIcon,
//   ListItemText,
//   Tooltip,
// } from "@material-ui/core/";

// import DeleteIcon from "@material-ui/icons/Delete";
// // import CancelIcon from "@material-ui/icons/Cancel";
// // import CheckCircleIcon from "@material-ui/icons/CheckCircle";

// const StyledMenu = withStyles({
//   paper: {
//     border: "1px solid #d3d4d5",
//   },
// })((props) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "center",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "center",
//     }}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     "&:focus": {
//       backgroundColor: theme.palette.secondary.main,
//       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

// function DeleteMenu({ deleteEmployee, rowID }) {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Tooltip title="Remove Employee">
//         <IconButton
//           aria-controls="customized-menu"
//           aria-haspopup="true"
//           aria-label="delete"
//           variant="contained"
//           color="secondary"
//           onClick={handleClick}
//         >
//           <DeleteIcon />
//         </IconButton>
//       </Tooltip>

//       <StyledMenu
//         id="customized-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <StyledMenuItem
//           onClick={() => {
//             deleteEmployee(rowID);
//             handleClose();
//           }}
//         >
//           {/* <ListItemIcon>
//             <CheckCircleIcon fontSize="small" />
//           </ListItemIcon> */}
//           <ListItemText primary="Delete" />
//         </StyledMenuItem>
//         {/* <StyledMenuItem>
//           <ListItemIcon>
//             <CancelIcon fontSize="small" />
//           </ListItemIcon>
//           <ListItemText primary="Cancel" />
//         </StyledMenuItem> */}
//       </StyledMenu>
//     </div>
//   );
// }
// export default DeleteMenu;
