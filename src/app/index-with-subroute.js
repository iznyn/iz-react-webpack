/**
 * app/index-with-subroute.js
 *
 * Ini digunakan ketika applikasi menggunakan beberapa layout.
 * Seperti ketika support halaman Administrator, landing atau campaign.
 *
 * Ketika menggunakan sub routing, sebaikannya pada component global
 * menggunakan memo untuk mencegah re-rendering ketika berpindah halaman.
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
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/test" component={Test} />
      <Route component={Main} />
    </Switch>
  </BrowserRouter>
);

export default App;
