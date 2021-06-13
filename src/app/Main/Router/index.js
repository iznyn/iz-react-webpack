/**
 * App/Main/Router.js
 */
import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Homepage from 'pages/Homepage';
import About from 'pages/About';
import Contact from 'pages/Contact';
import NotFoundPage from 'pages/NotFound';
import AdminRoute from './AdminRoute';
import MainRoute from './MainRoute';

const MainRouter = () => (
  <Switch>
    <MainRoute path="/" exact component={Homepage} />
    <MainRoute path="/about" exact component={About} />
    <MainRoute path="/contact" exact component={Contact} />
    <AdminRoute path="/admin" exact component={Homepage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default withRouter(MainRouter);
