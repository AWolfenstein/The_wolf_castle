import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import ForumIcon from '@material-ui/icons/Forum';
import LatestPostList from "../LatestPostList/LatestPostList";

const useStyles = makeStyles((theme) => ({
    paperBackground: {
        backgroundColor: "#00000052",

        boxShadow: "0px 0px 16px 2px #1beef370",
        height: "600px",
        width: "100%",
    },
    paperHead: {
        fontFamily: "Determination2",
        fontSize: "18px",
        color: "#00f5ea94",
        backgroundColor: "#020d3c82",
        paddingTop: "10px",
        paddingBottom: "5px",
        borderRadius: "6px 6px 0px 0px",
        boxShadow: "0px 2px 3px 0px #37a6bb4a",
    }
}));

const RightHomeBlock = () => {
    const classes = useStyles();

    const body = (
        <Paper classes={{root: classes.paperBackground}}>
            <Paper classes={{root: classes.paperHead}}>
                <div style={{display: "inline-flex"}}>
                    <ForumIcon/>
                    Latest Posts
                </div>

            </Paper>
            <LatestPostList></LatestPostList>
        </Paper>
    );
    return body;
};

export default RightHomeBlock;