import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {withNamespaces} from 'react-i18next';
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
        backgroundColor: "#77108dff6",
    },
    item: {
        color: "white",
        backgroundColor: "#090010cc",
        flexGrow: 2, //#9c2525
        "&:hover": {
            backgroundColor: "#51046da8",
        },
        ' &[aria-selected="true"]': {
            color: "#f50057",
        },
        "&:focus": {
            color: "#f50057",
        },
    },
    itemText: {
        textAlign: "center",
        marginRight: "10px",
    },
    secondText: {
        color: "#9c2525",
    },
    rightSecondText: {
        color: "#9c2525",
        textTransform: "uppercase"
    },
    divider: {
        background: "linear-gradient(90deg, rgba(0,0,0,0.5578606442577031) 11%, rgba(4,245,255,0.6727065826330532) 52%, rgba(0,0,0,0.4206057422969187) 93%)"
    },
}));

const CategoryList = ({t}) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem className={classes.item} button>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText classes={{secondary: classes.secondText}} primary="Photos"
                              secondary="Jan 9, 2014"/>
                <div style={{display: "inline-flex"}}>
                    <ListItemText className={classes.itemText} classes={{secondary: classes.rightSecondText}}
                                  primary="200"
                                  secondary={t('threads')}/>
                    <> </>
                    <ListItemText className={classes.itemText} classes={{secondary: classes.rightSecondText}}
                                  primary="3000"
                                  secondary={t('posts')}/>
                </div>
            </ListItem>
            <Divider className={classes.divider}/>
            <ListItem className={classes.item} button>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText classes={{secondary: classes.secondText}} primary="Work" secondary="Jan 7, 2014"/>
                <div style={{display: "inline-flex"}}>
                    <ListItemText className={classes.itemText} classes={{secondary: classes.rightSecondText}}
                                  primary="200"
                                  secondary={t('threads')}/>
                    <> </>
                    <ListItemText className={classes.itemText} classes={{secondary: classes.rightSecondText}}
                                  primary="3000"
                                  secondary={t('posts')}/>
                </div>
            </ListItem>
            <Divider className={classes.divider}/>
            <ListItem className={classes.item} button>
                <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText classes={{secondary: classes.secondText}} primary="Vacation" secondary="July 20, 2014"/>
                <div style={{display: "inline-flex"}}>
                    <ListItemText className={classes.itemText} classes={{secondary: classes.rightSecondText}}
                                  primary="200"
                                  secondary={t('threads')}/>
                    <> </>
                    <ListItemText className={classes.itemText} classes={{secondary: classes.rightSecondText}}
                                  primary="3000"
                                  secondary={t('posts')}/>
                </div>
            </ListItem>
            <Divider className={classes.divider}/>
        </List>
    );
}
export default withNamespaces()(CategoryList)