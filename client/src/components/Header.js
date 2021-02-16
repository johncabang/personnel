import { useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core/";
// import logo from "../assets/images/logo.png";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    height: "5vh",
  },
}));

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  const history = useHistory();

  useEffect(() => {
    // console.log(localStorage.getItem("loggedIn"));
    setLoggedIn(localStorage.getItem("loggedIn"));
    // console.log(loggedIn);
  }, [localStorage.getItem("loggedIn")]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* <img src={logo} /> */}
            <img
              src="https://img.icons8.com/wired/100/000000/briefcase.png"
              style={{ width: "20%", marginRight: 20 }}
            />
            <Typography variant="h5" className={classes.title}>
              Personnel
            </Typography>
          </div>
        </Link>
        <div>
          {loggedIn ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                component={Link}
                to="/"
                color="inherit"
                style={{ width: 70, height: 40 }}
              >
                ADMIN
              </Button>
              <Button
                component={Link}
                to="/login"
                onClick={logout}
                color="inherit"
                style={{ width: 70, height: 40 }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/login"
              color="inherit"
              style={{ width: 70, height: 40 }}
            >
              Login
            </Button>
          )}
          {/* <Button
            component={Link}
            to="/register"
            color="inherit"
            style={{ width: 70, height: 40 }}
          >
            Register
          </Button> */}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Header);
