import React from 'react';
import { Redirect } from 'react-router-dom';

import { getFromStorage } from '../../helpers/storage';

import * as L from './styles';

export const AuthLayout = (props) => {
  // here we should get token from localstorage
  let authToken = "asfasf";

  if (authToken) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }

  return <L.MainContainer>{props.children}</L.MainContainer>;
};