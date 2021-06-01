/**
 * pages/Homepage/index.js
 */

import React from 'react';

import Layout from 'components/Layout';
import ModalAlert from 'components/Modal/Alert';

const Homepage = () => (
  <div className="root">
    <Layout>
      <h1 className="mb-8">Homepage</h1>
    </Layout>
    <ModalAlert open title="Alert Danger" variant="info">
      This example for alert danger.
    </ModalAlert>
  </div>
);

export default Homepage;
