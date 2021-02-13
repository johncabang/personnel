import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core/";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    marginTop: 50,
    marginBottom: 50,
  },
}));

function AddEmployee({
  setFirstName,
  setLastName,
  setTitle,
  setLocation,
  setAge,
  setSalary,
  addEmployee,
}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TextField
          required
          id="filled-required-firstname"
          label="Required"
          defaultValue="First Name"
          variant="filled"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <TextField
          required
          id="filled-required-lastname"
          label="Required"
          defaultValue="Last Name"
          variant="filled"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <TextField
          required
          id="filled-required-title"
          label="Required"
          defaultValue="Title"
          variant="filled"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <TextField
          required
          id="filled-required-location"
          label="Required"
          defaultValue="Location"
          variant="filled"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <TextField
          id="filled-number-age"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <TextField
          id="filled-number-salary"
          label="Salary"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={(event) => {
            setSalary(event.target.value);
          }}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<PersonAddIcon />}
          onClick={addEmployee}
          style={{ borderRadius: 25 }}
        >
          Add
        </Button>
      </div>
    </form>
  );
}

export default AddEmployee;
