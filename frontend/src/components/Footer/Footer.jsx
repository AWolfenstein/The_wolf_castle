import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  footer: {
    marginTop: "10%",
    minHeight: "70px",
    backgroundColor: "currentColor",
    textDecorationColor: "whitesmoke",
    width: "100%",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper fullWidth variant="outlined" square className={classes.footer}>
        This text for footer
      </Paper>
    </div>
  );
};

export default Footer;
