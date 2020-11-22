import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Grid, Container } from '@material-ui/core';
import NotFound from '../components/NotFound/NotFound';
import NavBar from '../components/NavBar/NavBar';
import AdsBlock from '../components/AdsBlock/AdsBlock';
import GlobalContainer from '../components/GlobalContainer/GlobalContainer';
import Footer from '../components/Footer/Footer';

import AuthLayoutRoutes from './authLayoutRoutes';
import BaseLayoutRoutes from './baseLayoutRoutes';

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12} md={12} sm={12}>
          <NavBar></NavBar>
        </Grid>
        <Router history={history}>
          <Switch>
          <AuthLayoutRoutes
            path="/auth/signin"
           >
            </AuthLayoutRoutes>
            <BaseLayoutRoutes exact path="/">
              <Grid container item xs={12} md={12} sm={12}>
                <AdsBlock></AdsBlock>
              </Grid>
              <Grid item xs={12} md={12} sm={12}>
                <GlobalContainer></GlobalContainer>
              </Grid>
            </BaseLayoutRoutes>
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Container>
          <Footer></Footer>
        </Container>
      </Grid>
    </div>
  );
}

export default App;
