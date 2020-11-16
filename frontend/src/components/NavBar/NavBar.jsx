import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  leftTitle: {
    marginLeft: "10%",
    fontFamily: "LadyRadical2",
    color: "#c0d608",
    textShadow:
      "#FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 75px, 2px 2px 2px rgba(206,89,55,0)",
  },
  rightButtons: {
    marginRight: "10%",
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: "#040410d6",
  },
  deletePrimary: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const body = (
    <div className={classes.root}>
      <AppBar
        position="static"
        classes={{ colorPrimary: classes.deletePrimary }}>
        <Toolbar classes={{ root: classes.toolbar }}>
          <Typography variant="h6" edge="start" className={classes.leftTitle}>
            The Wolf Castle
          </Typography>
          <Typography variant="h6" className={classes.title}></Typography>
          <div className={classes.rightButtons}>
            <Button color="inherit">Login</Button>
            <IconButton aria-label="show mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              //aria-controls={menuId}
              aria-haspopup="true"
              ///  onClick={handleProfileMenuOpen}
              color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
  return body;
};

export default NavBar;
