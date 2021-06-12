/**
 * app.js
 *
 */
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Http } from 'services/http';
import store from 'store';
import Main from './Main';

// Init API service
Http.init();

const App = () => ( 
  <Provider store={store}>
    <BrowserRouter basename={process.env.APP_BASENAME}>
      <Switch>
        <Main />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
