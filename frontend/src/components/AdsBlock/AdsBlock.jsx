import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#181834cf",
    borderRadius: " 0px 0px 20px 20px",
    boxShadow: "1px 6px 15px 1px rgba(250,127,250,0.8);",
  },
  image: {
    height: "100px",
    boxShadow: "1px 6px 15px 1px rgba(250,127,250,0.8);",
  },
  paper: {
    height: "100px",
  },
}));

const AdsBlock = () => {
  const classes = useStyles();

  return (
    <Grid container classes={classes.container}>
      <Grid item xs md>
        <Paper elevation={3} classes={{ root: classes.paper }}>
          <img
            src={
              "https://media.giphy.com/media/YqiAtA2zTVmTDya4mh/giphy-downsized.gif"
            }
            className={classes.image}
            alt=" текст"
          />
        </Paper>
      </Grid>
      <Grid item xs md>
        <Paper elevation={3} classes={{ root: classes.paper }}>
          <img
            src={
              "https://media.giphy.com/media/3oFzm4uvcl1qSztvFe/giphy-downsized.gif"
            }
            className={classes.image}
            alt=" текст"
          />
        </Paper>
      </Grid>
      <Grid item xs md>
        <Paper elevation={3} classes={{ root: classes.paper }}>
          <img
            src={
              "https://media.giphy.com/media/wLDW3StRJd0YaN2RaU/giphy-downsized.gif"
            }
            className={classes.image}
            alt=" текст"
          />
        </Paper>
      </Grid>
      <Grid item xs md>
        <Paper elevation={3} classes={{ root: classes.paper }}>
          <img
            src={
              "https://media.giphy.com/media/6z3hRBpxfvOYbfaWje/giphy-downsized.gif"
            }
            className={classes.image}
            alt=" текст"
          />
        </Paper>
      </Grid>
      <Grid item xs md>
        <Paper elevation={3} classes={{ root: classes.paper }}>
          <img
            src={
              "https://media.giphy.com/media/X7eVBA2TSFz53oxolL/giphy-downsized.gif"
            }
            className={classes.image}
            alt=" текст"
          />
        </Paper>
      </Grid>
      <Grid item xs md>
        <Paper elevation={3} classes={{ root: classes.paper }}>
          <img
            src={
              "https://media.giphy.com/media/j28kUFIrir0rworUS9/giphy-downsized.gif"
            }
            className={classes.image}
            alt=" текст"
          />
        </Paper>
      </Grid>
      <Grid item xs md>
        <Paper elevation={3} classes={{ root: classes.paper }}>
          <img
            src={"https://media.giphy.com/media/LqDEIKfIm5DtvPXPrf/giphy.gif"}
            className={classes.image}
            alt=" текст"
          />
        </Paper>
      </Grid>
      <Grid item xs md>
        <Paper elevation={3} classes={{ root: classes.paper }}>
          <img
            src={
              "https://media.giphy.com/media/QQkd5ymqRr2kCH5xAU/giphy-downsized.gif"
            }
            className={classes.image}
            alt=" текст"
          />
        </Paper>
      </Grid>
      <Grid item xs md>
        <Paper elevation={3} classes={{ root: classes.paper }}>
          <img
            src={
              "https://media.giphy.com/media/OpQgcsLTyxjzN8JlY9/giphy-downsized.gif"
            }
            className={classes.image}
            alt=" текст"
          />
        </Paper>
      </Grid>
      <Grid item xs md>
        <Paper elevation={3} classes={{ root: classes.paper }}>
          <img
            src={
              "https://media.giphy.com/media/33F7kgE50xnplDHKev/giphy-downsized.gif"
            }
            className={classes.image}
            alt=" текст"
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AdsBlock;
