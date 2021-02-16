import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
    height: "100%",
  },
  input: {
    margin: 10,
    width: 300,
  },
}));

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/users/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(response.data.message);
        console.log(response.data.message);
      }
      // else {
      //   setLoginStatus(response.data[0].email);
      // }
      else {
        // console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("loggedIn", true);
        // setLoginStatus(true);
        history.push("/");
      }
    });
  };

  // Check is User is Authenticated

  // const userAuthenticated = () => {
  //   Axios.get("http://localhost:3001/users/isUserAuth", {
  //     headers: {
  //       "x-access-token": localStorage.getItem("token"),
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // };

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/users/login").then((response) => {
  //     if (response.data.loggedIn === true) {
  //       setLoginStatus(response.data.user[0].email);
  //     }
  //   });
  // }, []);

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 10,
          padding: 30,
          background: "white",
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

        {/* Check if User is Authenticated / signed in */}
        {/* <h5 style={{ color: "#DC143C	", paddingLeft: 10, margin: 0 }}>
          {loginStatus && (
            <button onClick={userAuthenticated}>Check if Authenticated </button>
          )}
        </h5> */}
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
            width: 300,
          }}
        >
          LOGIN
        </Button>
      </div>
    </form>
  );
}

export default Login;
