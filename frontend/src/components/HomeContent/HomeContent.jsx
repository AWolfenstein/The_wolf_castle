import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import { isMobile, isTablet } from "react-device-detect";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import LeftHomeBlock from "../LeftHomeBlock/LeftHomeBlock";
import RightHomeBlock from "../RightHomeBlock/RightHomeBlock";
import CategoryTabs from "../CategoryTabs/CategoryTabs";
import { useWindowSize } from "../../customHook/hooks";

const useStyles = makeStyles(() => ({
  centerContainer: {
    marginTop: "1%",
  },
}));
const HomeContent = () => {
  const classes = useStyles();
  const size = useWindowSize();
  const halfScreen = size.width < 1220;
  const left = (
    <Grid item xs md lg>
      <LeftHomeBlock />
    </Grid>
  );
  return (
    <Grid
      container
      className={classes.centerContainer}
      spacing={4}
      direction={isMobile || isTablet || halfScreen ? "column" : "row"}
      justify="center"
      alignItems={isMobile || isTablet || halfScreen ? "stretch" : "flex-start"}
    >
      {!isMobile && !isTablet && !halfScreen ? left : ""}
      <Grid item xs md lg={8}>
        <CategoryTabs />
      </Grid>
      <Grid item xs md>
        <RightHomeBlock />
      </Grid>
      {isMobile || isTablet || halfScreen ? left : ""}
    </Grid>
  );
};

export default HomeContent;
