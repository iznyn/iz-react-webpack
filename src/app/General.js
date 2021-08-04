/**
 * App/General.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';

import { ModalAlertProvider } from 'components/Modal/Alert/Hook';
import ModalAlert from 'components/Modal/Alert/Result';

// Create a query client
const queryOptions = {
  queries: {
    refetchOnWindowFocus: true, // Window Focus Refetching
  },
};
const queryClient = new QueryClient({
  defaultOptions: queryOptions,
});

const General = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <SnackbarProvider maxSnack={3}>
      <ModalAlertProvider>
        {children}
        <ModalAlert />
      </ModalAlertProvider>
    </SnackbarProvider>
  </QueryClientProvider>
);

General.propTypes = {
  children: PropTypes.node,
};

export default General;
