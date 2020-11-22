import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import {withNamespaces} from 'react-i18next';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    paperBackground: {
        backgroundColor: "#00000052",

        boxShadow: "0px 0px 16px 2px #1beef370",
        height: "200px",
        width: "100%",
        marginBottom: "5%",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
            width: "0px",  /* Remove scrollbar space */
            background: "transparent"  /* Optional: just make scrollbar invisible */
        },
       

    },

    text: {color: "white"},

}));

const PrevAcrtiveUsers = ({t}) => {
    const classes = useStyles();

    const body = (
        <Paper elevation={3} classes={{root: classes.paperBackground}}>
            <Typography variant="caption" classes={{root: classes.text}}>
                Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr,
                Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr,
                Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr,
                Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr, Userrrrrrr,
            </Typography>
        </Paper>
    );
    return body;
};

export default withNamespaces()(PrevAcrtiveUsers);