/**
 * App/Test/index.js
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

const Test = () => {
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
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider maxSnack={3}>
        <ModalAlertProvider>
          <div className="test__page">
            {/* <div className="test__page__top">
              <h1>Test Page</h1>
            </div> */}
            <div className="test__page__main">
              <Router />
            </div>
          </div>
          <ModalAlert />
        </ModalAlertProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
};

export default Test;
