import React from 'react';
import { Route } from 'react-router-dom';

import { CommonDataProvider } from '../context/common-data-context';

import { BaseLayout } from './base';

const BaseLayoutRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <CommonDataProvider>
            <BaseLayout>
              {Component && <Component {...props} {...rest} />}
            </BaseLayout>
        </CommonDataProvider>
      )}
    />
  );
};

export default BaseLayoutRoutes;
