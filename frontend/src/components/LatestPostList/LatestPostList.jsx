import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',

        },
        smallAvatar: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
        primaryText: {
            color: "white",
            fontSize: "15px"
        },
        divider: {
            background: "linear-gradient(90deg, rgba(0,0,0,0.5578606442577031) 11%, rgba(4,245,255,0.6727065826330532) 52%, rgba(0,0,0,0.4206057422969187) 93%)"
        },
        item: {
            background: "radial-gradient(circle, rgba(42,128,128,0.5438550420168067) 0%, rgba(8,6,7,0.3841911764705882) 74%)"
        },
        avatarRoot: {
            minWidth: "40px"
        },
        secondText: {
            color: "#a53ed0",
            fontSize: "10px"
        }
    }))
;

const LatestPostList = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem className={classes.item}>
                <ListItemAvatar classes={{root: classes.avatarRoot}}>
                    <Avatar className={classes.smallAvatar}>
                        <ImageIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    classes={{secondary: classes.secondText, primary: classes.primaryText}}
                    primary="Large text for test width "
                    secondary="by Jony Devidi Louren"/>
            </ListItem>
            <Divider className={classes.divider}/>
            <ListItem className={classes.item}>
                <ListItemAvatar classes={{root: classes.avatarRoot}}>
                    <Avatar className={classes.smallAvatar}>
                        <WorkIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText classes={{secondary: classes.secondText, primary: classes.primaryText}} primary="Work"
                              secondary="Jan 7, 2014"/>
            </ListItem>
            <Divider className={classes.divider}/>
            <ListItem className={classes.item}>
                <ListItemAvatar classes={{root: classes.avatarRoot}}>
                    <Avatar className={classes.smallAvatar}>
                        <BeachAccessIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText classes={{secondary: classes.secondText, primary: classes.primaryText}} primary="Vacation"
                              secondary="July 20, 2014"/>
            </ListItem>
            <Divider className={classes.divider}/>
            <ListItem className={classes.item}>
                <ListItemAvatar classes={{root: classes.avatarRoot}}>
                    <Avatar className={classes.smallAvatar}>
                        <ImageIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    classes={{secondary: classes.secondText, primary: classes.primaryText}}
                    primary="Large text for test width "
                    secondary="by Jony Devidi Louren"/>
            </ListItem>
            <Divider className={classes.divider}/>
            <ListItem className={classes.item}>
                <ListItemAvatar classes={{root: classes.avatarRoot}}>
                    <Avatar className={classes.smallAvatar}>
                        <WorkIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText classes={{secondary: classes.secondText, primary: classes.primaryText}} primary="Work"
                              secondary="Jan 7, 2014"/>
            </ListItem>
            <Divider className={classes.divider}/>
            <ListItem className={classes.item}>
                <ListItemAvatar classes={{root: classes.avatarRoot}}>
                    <Avatar className={classes.smallAvatar}>
                        <BeachAccessIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText classes={{secondary: classes.secondText, primary: classes.primaryText}} primary="Vacation"
                              secondary="July 20, 2014"/>
            </ListItem>
            <Divider className={classes.divider}/>
            <ListItem className={classes.item}>
                <ListItemAvatar classes={{root: classes.avatarRoot}}>
                    <Avatar className={classes.smallAvatar}>
                        <ImageIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    classes={{secondary: classes.secondText, primary: classes.primaryText}}
                    primary="Large text for test width "
                    secondary="by Jony Devidi Louren"/>
            </ListItem>
            <Divider className={classes.divider}/>
          
        </List>
    );
}
export default LatestPostList