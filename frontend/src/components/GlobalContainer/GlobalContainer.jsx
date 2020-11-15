import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import LeftHomeBlock from "../LeftHomeBlock/LeftHomeBlock";
import RightHomeBlock from "../RightHomeBlock/RightHomeBlock";
import CategoryTabs from "../CategoryTabs/CategoryTabs";
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
  centerContainer:{
    marginTop: "1%",
  },
}));
const GlobalContainer = () => {
  const classes = useStyles();
  const body = (
    <Container children className={classes.gCont}>
      <div style={{ height: "1px" }}></div>
      <Breadcrumb></Breadcrumb>
      <Grid item xs={12}>
        <Grid container className={classes.centerContainer} justify="center"  spacing={2}   >
          <Grid item>
            <LeftHomeBlock></LeftHomeBlock>
          </Grid>
          <Grid item>
            <CategoryTabs></CategoryTabs>
          </Grid>
          <Grid item>
            <RightHomeBlock></RightHomeBlock>
          </Grid>
        </Grid>
        </Grid>
    
    </Container>
  );
  return body;
};

export default GlobalContainer;
