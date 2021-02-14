import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core/";
import logo from "../assets/images/logo.png";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
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
        <Button color="inherit" style={{ width: 70, height: 40 }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
