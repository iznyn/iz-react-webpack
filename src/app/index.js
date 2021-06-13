/**
 * app.js
 *
 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Http } from 'services/http';
import Main from './Main/Loadable';
import Admin from './Admin/Loadable';
import Test from './Test/Loadable';

// Init API service
Http.init();

const App = () => (
  <BrowserRouter basename={process.env.APP_BASENAME}>
    <div className="higher">
      <h1>ROOT</h1>
      <div className="higher__main">
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
