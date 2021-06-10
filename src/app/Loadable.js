/**
 * Asynchronously loads the component for About
 */

import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from 'components/Loader/App';

export default loadable(
  // eslint-disable-next-line arrow-body-style
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('./Main')), 200);
    });
  },
  {
    fallback: <LoadingIndicator show />,
  },
);
