/**
 * App/Main/index.js
 */
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';

import { Http } from 'services/http';
import { ModalAlertProvider } from 'components/Modal/Alert/Hook';
import ModalAlert from 'components/Modal/Alert/Result';

import Router from './Router';

// Create a query client
const queryClient = new QueryClient();

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

  console.log('Main');

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3}>
          <ModalAlertProvider>
            <Router />
            <ModalAlert />
          </ModalAlertProvider>
        </SnackbarProvider>
      </QueryClientProvider>
    </>
  );
};

export default Main;
