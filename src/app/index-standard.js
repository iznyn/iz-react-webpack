/**
 * app/index.js
 *
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Http } from 'services/http';
import Main from './Main/Loadable';
import General from './General';

// Init API service
Http.init();

const App = () => (
  <BrowserRouter basename={process.env.APP_BASENAME}>
    <General>
      <Main />
    </General>
  </BrowserRouter>
);

export default App;
