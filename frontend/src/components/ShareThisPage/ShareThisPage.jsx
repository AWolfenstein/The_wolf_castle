import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {withNamespaces} from 'react-i18next';
import {Paper} from "@material-ui/core";
import TelegramIcon from '@material-ui/icons/Telegram';
import Link from "@material-ui/core/Link";
import RedditIcon from '@material-ui/icons/Reddit';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
    paperBackground: {
        backgroundColor: "#00000052",

        boxShadow: "0px 0px 16px 2px #1beef370",
       
        width: "100%",
    },
    icons: {
        paddingRight: "5px",
        fontSize: 30
    }
}));

const ShareThisPage = ({t}) => {
    const classes = useStyles();

    const body = (
        <Paper elevation={3} classes={{root: classes.paperBackground}}>
            <Link href={"/"}><TelegramIcon className={classes.icons}/></Link>
            <Link href={"/"}><RedditIcon className={classes.icons}/></Link>
            <Link href={"/"}><FacebookIcon className={classes.icons}/></Link>
            <Link href={"/"}><TwitterIcon className={classes.icons}/></Link>
            <Link href={"/"}><WhatsAppIcon className={classes.icons}/></Link>

        </Paper>
    );
    return body;
};

export default withNamespaces()(ShareThisPage);