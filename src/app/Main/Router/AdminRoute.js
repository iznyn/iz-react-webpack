import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminLayout = ({ children }) => (
  <div className="admin">
    <div className="admin__top">
      <h1>Admin</h1>
    </div>
    <div className="admin__main">{children}</div>
  </div>
);

AdminLayout.propTypes = {
  children: PropTypes.node,
};

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <AdminLayout>
        <Component {...props} />
      </AdminLayout>
    )}
  />
);

AdminRoute.propTypes = {
  component: PropTypes.func,
};

export default AdminRoute;
