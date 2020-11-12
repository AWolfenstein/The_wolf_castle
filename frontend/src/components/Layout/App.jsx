import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import NotFound from "../NotFound/NotFound";
import NavBar from "../NavBar/NavBar";
import AdsBlock from "../AdsBlock/AdsBlock";
function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12} md={12} sm={12}>
          <NavBar></NavBar>
        </Grid>
        <Router>
          <Grid item xs={12} md={12} sm={12} >
            <AdsBlock></AdsBlock>
          </Grid>
          <Grid item xs={12} md={12} sm={12}>
            <Switch>
              <Route exact path="/"></Route>
              <Route component={NotFound} />
            </Switch>
          </Grid>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
