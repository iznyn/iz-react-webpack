/**
 * app/index.js
 *
 * For development purpose, use index-standard.js for best performance.
 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Http } from 'services/http';
import Main from './Main/Loadable';
import Test from './Test/Loadable';
import General from './General';

// Init API service
Http.init();

const App = () => (
  <BrowserRouter basename={process.env.APP_BASENAME}>
    <General>
      <Switch>
        <Route path="/test" component={Test} />
        <Route component={Main} />
      </Switch>
    </General>
  </BrowserRouter>
);

export default App;
