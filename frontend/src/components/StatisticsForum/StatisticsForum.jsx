import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import {withNamespaces} from 'react-i18next';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ForumTwoToneIcon from '@material-ui/icons/ForumTwoTone';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import ListItemText from "@material-ui/core/ListItemText";
import WcRoundedIcon from '@material-ui/icons/WcRounded';

const useStyles = makeStyles((theme) => ({
    paperBackground: {
        backgroundColor: "#00000052",
        boxShadow: "0px 0px 16px 2px #1beef370",
        width: "100%",
        marginBottom: "5%"
    },
    root: {
        width: '100%',
        color: "#0072ff"
    },
    avatarRoot: {
        minWidth: "40px"
    },
    primaryText: {
        color: "white",
        fontSize: "15px"
    },
    secondText: {
        color: "#a53ed0",

    },
    itemRoot: {
        paddingTop: 0,
        paddingBottom: 0
    }

}));

const StatisticsForum = ({t}) => {
    const classes = useStyles();

    const body = (
        <Paper elevation={3} classes={{root: classes.paperBackground}}>
            <List className={classes.root}>
                <ListItem classes={{root: classes.itemRoot}}>
                    <ListItemAvatar classes={{root: classes.avatarRoot}}>
                        <ForumTwoToneIcon/>
                    </ListItemAvatar>
                    <ListItemText classes={{secondary: classes.secondText, primary: classes.primaryText}}
                                  primary={t('threads')} secondary="10,000"/>
                </ListItem>
                <ListItem classes={{root: classes.itemRoot}}>
                    <ListItemAvatar classes={{root: classes.avatarRoot}}>
                        <MessageRoundedIcon/>
                    </ListItemAvatar>
                    <ListItemText classes={{secondary: classes.secondText, primary: classes.primaryText}}
                                  primary={t('posts')} secondary="360,000"/>
                </ListItem>
                <ListItem classes={{root: classes.itemRoot}}>
                    <ListItemAvatar classes={{root: classes.avatarRoot}}>
                        <WcRoundedIcon/>
                    </ListItemAvatar>
                    <ListItemText classes={{secondary: classes.secondText, primary: classes.primaryText}}
                                  primary={t('users')} secondary="333,333"/>
                </ListItem>
            </List>
        </Paper>
    );
    return body;
};

export default withNamespaces()(StatisticsForum);