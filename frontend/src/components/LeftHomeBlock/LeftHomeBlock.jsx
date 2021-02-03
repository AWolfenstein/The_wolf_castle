import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import ShareIcon from "@material-ui/icons/Share";
import TimelineIcon from "@material-ui/icons/Timeline";
import { withNamespaces } from "react-i18next";
import PrevActiveUsers from "../PrevActiveUsers/PrevActiveUsers";
import StatisticsForum from "../StatisticsForum/StatisticsForum";
import ShareThisPage from "../ShareThisPage/ShareThisPage";

const useStyles = makeStyles((theme) => ({
  paperBackground: {
    backgroundColor: "#00000052",
    boxShadow: "0px 0px 16px 2px #1beef370",
    width: "100%",
  },
  paperHead: {
    width: "100%",
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
    paddingRight: "5px",
  },
}));

const LeftHomeBlock = ({ t }) => {
  const classes = useStyles();
  return (
    <Paper classes={{ root: classes.paperBackground }}>
      <Grid
        container
        direction="row"
        spacing={1}
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs md sm>
          <Paper classes={{ root: classes.paperHead }}>
            <div style={{ display: "inline-flex" }}>
              <SupervisedUserCircleIcon className={classes.icons} />
              {t("activeUsers")}
            </div>
          </Paper>
          <PrevActiveUsers />
        </Grid>
        <Grid item xs md sm>
          <Paper classes={{ root: classes.paperHead }}>
            <div style={{ display: "inline-flex" }}>
              <TimelineIcon className={classes.icons} />
              {t("statisticsForum")}
            </div>
          </Paper>
          <StatisticsForum />
        </Grid>
        <Grid item xs md sm>
          <Paper classes={{ root: classes.paperHead }}>
            <div style={{ display: "inline-flex" }}>
              <ShareIcon className={classes.icons} />
              {t("sharePage")}
            </div>
          </Paper>
          <ShareThisPage />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withNamespaces()(LeftHomeBlock);
