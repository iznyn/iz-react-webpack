/**
 * App/Main.js
 */
import React, { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';

import { Http } from 'services/http';
import Layout from 'components/Layout';

import Router from './Router';

const Main = () => {
  useEffect(() => {
    // const auth = store.get('APP_USER');
    const auth = false;
    if (auth) {
      Http.setupToken();
    } else {
      Http.resetToken();
    }
  }, []);

  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Layout>
          <Router />
        </Layout>
      </SnackbarProvider>
    </>
  );
};

export default Main;
