/**
 * Asynchronously loads the component
 */

import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from 'components/Loader/App/Base';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator show />,
});
