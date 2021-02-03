import React from 'react';
import {AppBar, Badge, Button, IconButton, Link, Toolbar, Typography,} from '@material-ui/core';
import {withNamespaces} from 'react-i18next';
import {makeStyles} from '@material-ui/core/styles';
import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

import {successSnackbar} from '../../store/modules/context/actions';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    leftTitle: {
        marginLeft: '10%',
        fontFamily: 'LadyRadical2',
        color: '#c0d608',
        textShadow:
            '#FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 75px, 2px 2px 2px rgba(206,89,55,0)',
    },
    rightButtons: {
        marginRight: '10%',
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        backgroundColor: '#040410d6',
    },
    deletePrimary: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
}));

const NavBar = ({t, setOpen}) => {
    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                classes={{colorPrimary: classes.deletePrimary}}
            >
                <Toolbar classes={{root: classes.toolbar}}>
                    <Link
                        variant="h6"
                        edge="start"
                        href="/"
                        className={classes.leftTitle}
                    >
                        {t('theWolfCastle')}
                    </Link>
                    <Typography variant="h6" className={classes.title}/>
                    <div className={classes.rightButtons}>
                        <Button
                            color="inherit"
                            onClick={
                                handleClickOpen
                            }
                        >
                            {t('login')}
                        </Button>
                        <IconButton aria-label="show mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            //aria-controls={menuId}
                            aria-haspopup="true"
                            ///  onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            successSnackbar,
        },
        dispatch
    );
};

export default compose(
    withNamespaces(),
    connect(mapStateToProps, mapDispatchToProps)
)(NavBar);
