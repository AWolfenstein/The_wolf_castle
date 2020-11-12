import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  gCont: {
    marginTop:"1%",
    marginBottom: "1%",
    height: "100px",
    backgroundColor: "#181834cf",
    borderRadius: " 10px ",
    boxShadow: "1px 6px 15px 1px rgba(59,12,236,0.8);",
  },
}));
const GlobalContainer = () => {
  const classes = useStyles();
  const body = (
    <Container children className={classes.gCont}  >

    </Container>
  );
  return body;
};

export default GlobalContainer;
