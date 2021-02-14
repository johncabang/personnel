import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
// import CopyrightIcon from "@material-ui/icons/Copyright";
// import logo from "../assets/images/logo.png";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
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
            {/* <CopyrightIcon /> */}
            {new Date().getFullYear()} All Rights Reserved
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
