import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import NotFound from "../NotFound/NotFound";
import NavBar from "../NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <NavBar></NavBar>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Router>
            <Switch>
              <Route exact path="/"></Route>
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
