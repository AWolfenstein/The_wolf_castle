import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
const useStyles = makeStyles((theme) => ({
  paperBackground: {
    backgroundColor: "#00000052",

    boxShadow: "0px 0px 16px 2px rgba(12 ,208, 90 , 43%);",
    height: "600px",
    width: "200px",
  },
}));

const LeftHomeBlock = () => {
  const classes = useStyles();

  const body = (
    <Paper elevation={3} classes={{ root: classes.paperBackground }}>dsdsdsd</Paper>
  );
  return body;
};

export default LeftHomeBlock;
