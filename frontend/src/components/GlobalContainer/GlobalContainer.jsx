import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
const useStyles = makeStyles((theme) => ({
  gCont: {
    marginTop: "1%",
    marginBottom: "1%",
    height: "700px",
    backgroundColor: "#181834cf",
    borderRadius: " 10px ",
    boxShadow: "0px 0px 16px 2px rgba(59,12,236,0.8);",
  },
  deletePrimary: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
}));
const GlobalContainer = () => {
  const classes = useStyles();
  const body = (
    <Container children className={classes.gCont}>
      <div style={{height:"1px"}}></div>
      <Breadcrumb></Breadcrumb>
    
    </Container>
  );
  return body;
};

export default GlobalContainer;
