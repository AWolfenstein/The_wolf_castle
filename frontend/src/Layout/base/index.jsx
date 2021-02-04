import React, { Fragment } from "react";
import { Redirect, useHistory } from "react-router-dom";

import * as L from "./styles";
import { Box } from "@material-ui/core";

export const BaseLayout = (props) => {
  const history = useHistory();
  const authToken = "authenticationToken";
  // get from local storage

  /*if (!authToken) {
        return (
            <Redirect
                to={{
                    pathname: '/auth/signin',
                    state: {from: history.location},
                }}
            />
        );
    }*/

  return (
    <Fragment>
      <Box>{props.children}</Box>
    </Fragment>
  );
};
