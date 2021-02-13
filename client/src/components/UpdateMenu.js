import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core/";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import EditIcon from "@material-ui/icons/Edit";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {},
}))(MenuItem);

function UpdateMenu({ setNewSalary, updateEmployeeSalary, rowID }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <EditIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body1">Update</Typography>
            <TextField
              id="filled-update-salary"
              label="New Salary"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
              style={{ margin: 15 }}
            />
            {/* <TextField
              id="filled-update-firstname"
              label="First Name"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
              style={{ margin: 15 }}
            />
            <TextField
              id="filled-update-lastname"
              label="Last Name"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
              style={{ margin: 15 }}
            />
            <TextField
              id="filled-update-title"
              label="Title"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
              style={{ margin: 15 }}
            />
            <TextField
              id="filled-update-location"
              label="Location"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
              style={{ margin: 15 }}
            />
            <TextField
              id="filled-update-age"
              label="Age"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
              style={{ margin: 15 }}
            /> */}
          </div>
          <ListItemIcon>
            <CheckCircleIcon
              fontSize="small"
              style={{ marginLeft: 20 }}
              onClick={() => {
                updateEmployeeSalary(rowID);
              }}
              color="primary"
            />
          </ListItemIcon>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
export default UpdateMenu;
