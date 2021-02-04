import React, { useState } from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar/NavBar";
import AdsBlock from "../components/AdsBlock/AdsBlock";
import Footer from "../components/Footer/Footer";
import LoginModal from "../components/LoginModal/LoginModal";
import GlobalContainer from "../components/GlobalContainer/GlobalContainer";

export const history = createBrowserHistory();

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <NavBar setOpen={setOpen} />
      <Grid container direction="column" justify="flex-end" alignItems="center">
        <Grid item xs md sm>
          <AdsBlock />
        </Grid>
        <Grid item xs md sm>
          <GlobalContainer />
        </Grid>
        <Grid item xs md sm>
          <Footer />
        </Grid>
      </Grid>
      <LoginModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default App;
