import { useState, useEffect } from "react";
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
  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/users/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/users/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].email);
      }
    });
  }, []);

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
        <h5 style={{ color: "#DC143C	", paddingLeft: 10, margin: 0 }}>
          {loginStatus}
        </h5>
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
