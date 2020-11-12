import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  leftTitle: {
    marginLeft: "10%",
  },
  rightButtons: {
    marginRight: "10%",
  },
  title: {
    flexGrow: 1,
  },
  toolbar:{
    backgroundColor:  "#040410d6" 
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const body = (
    <div  className={classes.root} >
      <AppBar position="static" >
        <Toolbar classes={{root: classes.toolbar}}>
        <Typography variant="h6" edge="start" className={classes.leftTitle} >
        The Wolf Castle
          </Typography>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <div  className={classes.rightButtons} >
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
