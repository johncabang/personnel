import { useState } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Typography } from "@material-ui/core/";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    // console.log(email);
    Axios.post("http://localhost:3001/users/login", {
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
          LOGIN
        </Typography>
        <TextField
          required
          id="filled-required-firstname"
          label="email"
          variant="outlined"
          size="small"
          type="text"
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
          startIcon={<VpnKeyIcon />}
          onClick={login}
          style={{
            margin: 10,
            width: 200,
          }}
        >
          LOGIN
        </Button>
      </div>
    </form>
  );
}

export default Login;
