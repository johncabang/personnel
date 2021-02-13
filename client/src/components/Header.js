import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core/";

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
        <Typography variant="h6" className={classes.title}>
          Personnel
        </Typography>
        <Button color="inherit" style={{ width: 70, height: 40 }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
