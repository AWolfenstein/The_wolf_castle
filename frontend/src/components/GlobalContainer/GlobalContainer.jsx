import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import LeftHomeBlock from "../LeftHomeBlock/LeftHomeBlock";
import RightHomeBlock from "../RightHomeBlock/RightHomeBlock";
import CategoryTabs from "../CategoryTabs/CategoryTabs";

const useStyles = makeStyles(() => ({
  gCont: {
    marginTop: "1%",
    marginBottom: "1%",
    backgroundColor: "#181834cf",
    borderRadius: " 10px ",
    boxShadow: "0px 0px 16px 2px #3b0cec",
  },
  deletePrimary: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  centerContainer: {
    marginTop: "1%",
  },
}));
const GlobalContainer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.gCont}>
      <div style={{ height: "1px" }} />
      <Breadcrumb />
      <Grid
        container
        className={classes.centerContainer}
        spacing={4}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs md={2}>
          <LeftHomeBlock />
        </Grid>
        <Grid item xs md={8}>
          <CategoryTabs />
        </Grid>
        <Grid item xs md={2}>
          <RightHomeBlock />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GlobalContainer;
