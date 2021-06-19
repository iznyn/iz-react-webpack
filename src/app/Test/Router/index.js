/**
 * App/Main/Router/index.js
 */
import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Config from './Config';

const TestRouter = () => (
  <Switch>
    {Config.map((route) => {
      const { name, path, exact, component } = route;
      return (
        <Route
          key={`route-${name}`}
          path={`/test${path}`}
          exact={exact}
          component={component}
        />
      );
    })}
  </Switch>
);

export default withRouter(TestRouter);
