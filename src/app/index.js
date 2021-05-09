/**
 * app.js
 *
 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Http } from 'services/http';
import Main from './Main';

// Init API service
Http.init();

const App = () => (
  <BrowserRouter basename={process.env.BASENAME}>
    <Switch>
      <Route component={Main} />
    </Switch>
  </BrowserRouter>
);

export default withRouter(App);
