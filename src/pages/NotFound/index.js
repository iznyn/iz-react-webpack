/**
 * pages/NotFound/index.js
 */

import React from 'react';

import Container from 'components/Container';
import Layout from 'components/Layout';

const NotFound = () => {
  return (
    <div className="root">
      <Layout>
        <div className="content">
          <Container size="xl">
            <h1>ERROR 404</h1>
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default NotFound;
