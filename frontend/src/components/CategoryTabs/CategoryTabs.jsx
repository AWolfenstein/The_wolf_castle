import React from "react";
import PropTypes from "prop-types";

import {makeStyles} from "@material-ui/core/styles";
import {withNamespaces} from 'react-i18next';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Box from "@material-ui/core/Box";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import CategoryList from "../CategoryList/CategoryList";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "600px",
        width: "100%",
        backgroundColor: "#270e3836",
        boxShadow: "0px 0px 16px 2px #f213ff96",
        borderRadius: "5px",
    },
    deletePrimary: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    tabStyle: {
        fontFamily: "Determination2",
        color: "#9686eaad",
        "&:hover": {
            color: "#e504e8",
        },
        ' &[aria-selected="true"]': {
            color: "#f50057",
        },
        "&:focus": {
            color: "#f50057",
        },
    },
}));

function TabPanel(props) {
    const {children, value, index, ...other} = props;
    const classes = useStyles();
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        "aria-controls": `scrollable-force-tabpanel-${index}`,
    };
}

const CategoryTabs = ({t}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    style={{
                        color: "white",
                        backgroundColor: "#000000a6",
                        borderRadius: "6px 6px 0px 0px",
                        boxShadow: "0px 10px 13px -0px #000000",
                    }}>
                    <Tab
                        label={t('general')}
                        className={classes.tabStyle}
                        icon={<HomeIcon/>}
                        {...a11yProps(0)}
                    />
                    <Tab
                        label={t('tech')}
                        className={classes.tabStyle}
                        icon={<ImportantDevicesIcon/>}
                        {...a11yProps(1)}
                    />
                    <Tab
                        label={t('games')}
                        className={classes.tabStyle}
                        icon={<SportsEsportsIcon/>}
                        {...a11yProps(2)}
                    />
                    <Tab
                        label={t('tutorials')}
                        className={classes.tabStyle}
                        icon={<HelpIcon/>}
                        {...a11yProps(3)}
                    />
                    <Tab
                        label={t('marketplace')}
                        className={classes.tabStyle}
                        icon={<ShoppingBasket/>}
                        {...a11yProps(4)}
                    />
                    <Tab
                        label="Item Six"
                        className={classes.tabStyle}
                        icon={<ThumbDown/>}
                        {...a11yProps(5)}
                    />
                    <Tab
                        label="Item Seven"
                        className={classes.tabStyle}
                        icon={<ThumbUp/>}
                        {...a11yProps(6)}
                    />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <CategoryList></CategoryList>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five fsfsf


            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
        </div>
    );
};
export default withNamespaces()(CategoryTabs);
