import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import CopyrightIcon from "@material-ui/icons/Copyright";
// import logo from "../assets/images/logo.png";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "5vh",
    bottom: 0,
  },
}));

function Footer() {
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
          <Typography
            variant="body2"
            style={{ display: "flex", alignitems: "center" }}
          >
            Copyright
          </Typography>
          <CopyrightIcon style={{ marginRight: 5, marginLeft: 5 }} />
          <Typography
            variant="body2"
            style={{ display: "flex", alignitems: "center" }}
          >
            {new Date().getFullYear()} Company Inc.
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
