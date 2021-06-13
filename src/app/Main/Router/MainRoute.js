import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';

const MainLayout = ({ children }) => <Layout>{children}</Layout>;

MainLayout.propTypes = {
  children: PropTypes.node,
};

const MainRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    )}
  />
);

MainRoute.propTypes = {
  component: PropTypes.func,
};

export default MainRoute;
