/**
 * pages/Homepage/index.js
 */

import React from 'react';

import Layout from 'components/Layout';
import Seo from 'components/Seo';

const Homepage = () => (
  <div className="root">
    <Seo />
    <Layout>
      <h1 className="mb-8">Homepage</h1>
    </Layout>
  </div>
);

export default Homepage;
