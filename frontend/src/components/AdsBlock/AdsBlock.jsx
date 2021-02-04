import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { isMobile, isTablet } from "react-device-detect";
import { useWindowSize } from "../../customHook/hooks";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#181834cf",
    borderRadius: " 0px 0px 20px 20px",
    boxShadow: "1px 6px 15px 1px rgba(250,127,250,0.8);",
  },

  paper: {
    height: "100px",
    width: "150px",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: " no-repeat",
    boxShadow: " inset 0px 0px 7px 4px rgba(250,127,250,0.8);",
    backgroundColor: "currentColor",
  },
}));

const imgList = {
  pc: [
    "https://media.giphy.com/media/YqiAtA2zTVmTDya4mh/giphy-downsized.gif",
    "https://media.giphy.com/media/3oFzm4uvcl1qSztvFe/giphy-downsized.gif",
    "https://media.giphy.com/media/wLDW3StRJd0YaN2RaU/giphy-downsized.gif",
    "https://media.giphy.com/media/6z3hRBpxfvOYbfaWje/giphy-downsized.gif",
    "https://media.giphy.com/media/X7eVBA2TSFz53oxolL/giphy-downsized.gif",
    "https://media.giphy.com/media/LqDEIKfIm5DtvPXPrf/giphy.gif",
    "https://media.giphy.com/media/QQkd5ymqRr2kCH5xAU/giphy-downsized.gif",
    "https://media.giphy.com/media/OpQgcsLTyxjzN8JlY9/giphy-downsized.gif",
    "https://media.giphy.com/media/33F7kgE50xnplDHKev/giphy-downsized.gif",
  ],
  halfScreen: [
    "https://media.giphy.com/media/YqiAtA2zTVmTDya4mh/giphy-downsized.gif",
    "https://media.giphy.com/media/3oFzm4uvcl1qSztvFe/giphy-downsized.gif",
    "https://media.giphy.com/media/wLDW3StRJd0YaN2RaU/giphy-downsized.gif",
    "https://media.giphy.com/media/6z3hRBpxfvOYbfaWje/giphy-downsized.gif",
    "https://media.giphy.com/media/X7eVBA2TSFz53oxolL/giphy-downsized.gif",
  ],
  tablet: [
    "https://media.giphy.com/media/YqiAtA2zTVmTDya4mh/giphy-downsized.gif",
    "https://media.giphy.com/media/3oFzm4uvcl1qSztvFe/giphy-downsized.gif",
    "https://media.giphy.com/media/wLDW3StRJd0YaN2RaU/giphy-downsized.gif",
    "https://media.giphy.com/media/6z3hRBpxfvOYbfaWje/giphy-downsized.gif",
  ],
  mobile: [
    "https://media.giphy.com/media/LqDEIKfIm5DtvPXPrf/giphy.gif",
    "https://media.giphy.com/media/QQkd5ymqRr2kCH5xAU/giphy-downsized.gif",
  ],
};

const AdsBlock = () => {
  const classes = useStyles();
  const size = useWindowSize();
  const halfScreen = size.width < 1220;
  const imgArr = () => {
    if (isTablet) {
      return imgList.tablet;
    }
    if (isMobile) {
      return imgList.mobile;
    }
    if (halfScreen) {
      return imgList.halfScreen;
    }
    return imgList.pc;
  };
  const image = imgArr().map((src, index) => (
    <Grid item key={index}>
      <Paper
        elevation={3}
        square
        classes={{ root: classes.paper }}
        style={{ backgroundImage: `url(${src})` }}
      />
    </Grid>
  ));

  return (
    <Grid container classes={{ root: classes.container }}>
      {image}
    </Grid>
  );
};

export default AdsBlock;
