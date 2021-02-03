import React, { useState } from "react";
import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Grid } from "@material-ui/core";
import NotFound from "../components/NotFound/NotFound";
import NavBar from "../components/NavBar/NavBar";
import AdsBlock from "../components/AdsBlock/AdsBlock";
import Footer from "../components/Footer/Footer";
import LoginModal from "../components/LoginModal/LoginModal";
import AuthLayoutRoutes from "./authLayoutRoutes";
import BaseLayoutRoutes from "./baseLayoutRoutes";
import GlobalContainer from "../components/GlobalContainer/GlobalContainer";

export const history = createBrowserHistory();

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <NavBar setOpen={setOpen} />
      <Grid container direction="column" justify="flex-end" alignItems="center">
        <Router history={history}>
          <Switch>
            <AuthLayoutRoutes path="/auth/signin" />
            <BaseLayoutRoutes exact path="/">
              <Grid item xs md sm>
                <AdsBlock />
              </Grid>
              <Grid item xs md sm>
                <GlobalContainer />
              </Grid>
            </BaseLayoutRoutes>
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Grid item xs md sm>
          <Footer />
        </Grid>
      </Grid>
      <LoginModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default App;
