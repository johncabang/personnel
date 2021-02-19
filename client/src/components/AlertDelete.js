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

function AlertDelete({ deleteEmployee, rowID }) {
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
            color="secondary"
            autoFocus
          >
            Delete Employee
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDelete;
