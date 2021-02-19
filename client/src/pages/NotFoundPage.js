import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core/";
import errorImage from "../assets/images/404-error.svg";

function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <img src={errorImage} style={{ height: 300 }} />
      <Typography variant="body1" align="center">
        We can't seem to find the page you're looking for.
      </Typography>
      <Button
        component={Link}
        to="/"
        color="primary"
        variant="outlined"
        size="small"
        style={{
          textTransform: "none",
          marginTop: 40,
        }}
      >
        Return to homepage
      </Button>
    </div>
  );
}

export default NotFoundPage;
