/**
 * app.js
 *
 */
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Http } from 'services/http';
import Main from './Main';

// Init API service
Http.init();

const App = () => (
  <BrowserRouter basename={process.env.APP_BASENAME}>
    <Switch>
      <Main />
    </Switch>
  </BrowserRouter>
);

export default App;
