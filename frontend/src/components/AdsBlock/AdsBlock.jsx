import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  container: {
    maxWidth: "70%",
    height: "100px",
    backgroundColor: "#181834cf",
    borderRadius: " 0px 0px 20px 20px",
    boxShadow: "1px 6px 15px 1px rgba(250,127,250,0.8);",
  },
}));
const AdsBlock = () => {
  const classes = useStyles();
  const body = (
    <Container children className={classes.container}>
      fdesf
    </Container>
  );
  return body;
};

export default AdsBlock;
