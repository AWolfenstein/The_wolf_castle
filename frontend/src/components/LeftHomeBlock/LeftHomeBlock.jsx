import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ShareIcon from '@material-ui/icons/Share';
import TimelineIcon from '@material-ui/icons/Timeline';
import {withNamespaces} from 'react-i18next';
import PrevActiveUsers from "../PrevActiveUsers/PrevActiveUsers";
import StatisticsForum from "../StatisticsForum/StatisticsForum";
import ShareThisPage from "../ShareThisPage/ShareThisPage";

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
    },
    icons: {
        paddingRight: "5px"
    }
}));

const LeftHomeBlock = ({t}) => {
    const classes = useStyles();

    const body = (
        <Paper elevation={3} classes={{root: classes.paperBackground}}>
            <div>
                <Paper classes={{root: classes.paperHead}}>
                    <div style={{display: "inline-flex"}}>
                        <SupervisedUserCircleIcon className={classes.icons}/>
                        {t('activeUsers')}
                    </div>
                </Paper>
                <PrevActiveUsers></PrevActiveUsers>
            </div>
            <div>
                <Paper classes={{root: classes.paperHead}}>
                    <div style={{display: "inline-flex"}}>
                        <TimelineIcon className={classes.icons}/>
                        {t('statisticsForum')}
                    </div>
                </Paper>
                <StatisticsForum></StatisticsForum>
            </div>
            <div>
                <Paper classes={{root: classes.paperHead}}>
                    <div style={{display: "inline-flex"}}>
                        <ShareIcon className={classes.icons}/>
                        {t('sharePage')}
                    </div>
                </Paper>
                <ShareThisPage></ShareThisPage>
            </div>
        </Paper>
    );
    return body;
};

export default withNamespaces()(LeftHomeBlock);
