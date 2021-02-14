import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core/";
import logo from "../assets/images/logo.png";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    height: "5vh",
  },
}));

function Header() {
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
          <Button
            component={Link}
            to="/login"
            color="inherit"
            style={{ width: 70, height: 40 }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/register"
            color="inherit"
            style={{ width: 70, height: 40 }}
          >
            Register
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Header);
