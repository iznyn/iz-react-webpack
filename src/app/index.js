/**
 * app.js
 *
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Http } from 'services/http';
import Main from './Main/Loadable';

// Init API service
Http.init();

const App = () => (
  <BrowserRouter basename={process.env.APP_BASENAME}>
    <Main />
  </BrowserRouter>
);

export default App;
