import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  footer: {

    height: "100px",
    backgroundColor: "currentColor",
    
   
  },
}));
const Footer = () => {
  const classes = useStyles();
  const body = (
    <Paper variant="outlined" square className={classes.footer}></Paper>
  );
  return body;
};

export default Footer;
