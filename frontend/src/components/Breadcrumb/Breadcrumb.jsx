import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {withNamespaces} from 'react-i18next';
import {Paper, Breadcrumbs, Link} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
    breadBackground: {
        backgroundColor: "#00000052",
        marginTop: "10px",
    },
    breadStyle: {
        color: "#df46da",
    },
    link: {
        display: "flex",
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,

    },
    deletePrimary: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
}));

const Breadcrumb = ({t}) => {
    const classes = useStyles();

    const body = (
        <Paper
            children
            variant="outlined"
            elevation={0}
            classes={{root: classes.breadBackground}}>
            <Breadcrumbs aria-label="breadcrumb" className={classes.breadStyle}>
                <Link color="inherit" href="/" className={classes.link}>
                    <HomeIcon className={classes.icon}/>
                    {t('home')}
                </Link>
            </Breadcrumbs>
        </Paper>
    );
    return body;
};

export default withNamespaces()(Breadcrumb);
