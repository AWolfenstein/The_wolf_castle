import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { Route, Router, Switch } from "react-router-dom";
import AuthLayoutRoutes from "../../Layout/authLayoutRoutes";
import BaseLayoutRoutes from "../../Layout/baseLayoutRoutes";
import NotFound from "../NotFound/NotFound";
import { history } from "../../Layout/App";
import HomeContent from "../HomeContent/HomeContent";
import RegisterPage from "../RegisterPage/RegisterPage";

const useStyles = makeStyles(() => ({
  gCont: {
    marginTop: "1%",
    marginBottom: "1%",
    backgroundColor: "#181834cf",
    borderRadius: " 10px ",
    boxShadow: "0px 0px 16px 2px #3b0cec",
  },
}));
const GlobalContainer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.gCont}>
      <div style={{ height: "1px" }} />
      <Breadcrumb />
      <Router history={history}>
        <Switch>
          <AuthLayoutRoutes path="/auth/signin" />
          <BaseLayoutRoutes exact path="/" component={HomeContent} />
          <BaseLayoutRoutes exact path="/register" component={RegisterPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Container>
  );
};

export default GlobalContainer;
