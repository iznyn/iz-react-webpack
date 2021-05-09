/**
 * components/Loader/Page.js
 */
import React from 'react';
import Container from 'components/Container';

import ContentLoader from './ContentLoader';

const LoaderPage = () => (
  <div className="loader__page">
    <Container size="xl">
      <ContentLoader />
    </Container>
  </div>
);

export default LoaderPage;
