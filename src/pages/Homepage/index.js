/**
 * pages/Homepage/index.js
 */

import React from 'react';

import Layout from 'components/Layout';
import Modal from 'components/Modal';

const Homepage = () => (
  <div className="root">
    <Layout>
      <h1 className="mb-8">Homepage</h1>
    </Layout>
    <Modal open>
      <h2>Errors</h2>
      <p>Found an errors.</p>
    </Modal>
  </div>
);

export default Homepage;
