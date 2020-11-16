import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
const useStyles = makeStyles((theme) => ({
  paperBackground: {
    backgroundColor: "#00000052",
 
    boxShadow: "0px 0px 16px 2px #1beef370",
    height: "600px",
    width: "100%",
  },
}));

const RightHomeBlock = () => {
  const classes = useStyles();

  const body = (
    <Paper classes={{ root: classes.paperBackground }}></Paper>
  );
  return body;
};

export default RightHomeBlock;