import { useState } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Typography } from "@material-ui/core/";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles(() => ({
  root: {
    margin: 50,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    margin: 10,
  },
}));

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    // console.log(email);
    Axios.post("http://localhost:3001/users/register", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" style={{ margin: 10 }}>
          REGISTER
        </Typography>
        <TextField
          required
          id="filled-required-firstname"
          label="email"
          variant="outlined"
          size="small"
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          className={classes.input}
        />
        <TextField
          required
          id="filled-required-lastname"
          label="password"
          variant="outlined"
          size="small"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          className={classes.input}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AddCircleOutlineIcon />}
          onClick={register}
          style={{
            margin: 10,
            width: 200,
          }}
        >
          REGISTER
        </Button>
      </div>
    </form>
  );
}

export default Register;
