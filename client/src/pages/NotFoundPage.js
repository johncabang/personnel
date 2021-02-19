import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core/";

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
      <Typography variant="h1" align="center">
        404
      </Typography>
      <Typography variant="body1" align="center">
        We can't seem to find the page you're looking for.
      </Typography>

      <Button
        component={Link}
        to="/"
        type="submit"
        style={{ textTransform: "none" }}
      >
        Return to homepage
      </Button>
    </div>
  );
}

export default NotFoundPage;
