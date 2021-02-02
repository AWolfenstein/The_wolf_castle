import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Container, Grid} from '@material-ui/core';
import NotFound from '../components/NotFound/NotFound';
import NavBar from '../components/NavBar/NavBar';
import AdsBlock from '../components/AdsBlock/AdsBlock';
import Footer from '../components/Footer/Footer';
import LoginModal from "../components/LoginModal/LoginModal";
import AuthLayoutRoutes from './authLayoutRoutes';
import BaseLayoutRoutes from './baseLayoutRoutes';

export const history = createBrowserHistory();

const App = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} md={12} sm={12}>
                    <NavBar setOpen={setOpen}/>
                </Grid>
                <Router history={history}>
                    <Switch>
                        <AuthLayoutRoutes
                            path="/auth/signin"
                        >
                        </AuthLayoutRoutes>
                        <BaseLayoutRoutes exact path="/">
                            <Grid container item xs={12} md={12} sm={12}>
                                <AdsBlock/>
                            </Grid>
                            <Grid item xs={12} md={12} sm={12}>
                                <GlobalContainer/>
                            </Grid>
                        </BaseLayoutRoutes>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
                <Container>
                    <Footer/>
                </Container>
            </Grid>
            <LoginModal open={open} setOpen={setOpen}/>
        </div>
    );
}

export default App;
