/**
 * pages/Homepage/index.js
 */

import React from 'react';

import Layout from 'components/Layout';
import Button from 'components/Button';
import Seo from 'components/Seo';
// import ModalAlert from 'components/Modal/Alert';

const Homepage = () => (
  <div className="root">
    <Seo />
    <Layout>
      <h1 className="mb-8">Homepage</h1>
    </Layout>
    {/* <ModalAlert open title="Alert Danger" variant="info">
      This example for alert danger.
</ModalAlert> */}
    <p
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 30,
      }}
    >
      <Button
        path="#"
        isLinkOutside
        variant="primary"
        size="xxs"
        label="View More Posts"
      />
      <Button
        path="#"
        isLinkOutside
        variant="primary"
        size="xs"
        label="View More Posts"
      />
      <Button
        path="#"
        isLinkOutside
        variant="primary"
        size="sm"
        label="View More Posts"
      />
      <Button
        path="#"
        isLinkOutside
        variant="primary"
        size="md"
        label="View More Posts"
      />
      <Button
        path="#"
        isLinkOutside
        variant="primary"
        size="lg"
        label="View More Posts"
      />
      <Button
        path="#"
        isLinkOutside
        variant="primary"
        size="xl"
        label="View More Posts"
      />
      <Button
        path="#"
        isLinkOutside
        variant="primary"
        size="xxl"
        label="View More Posts"
      />
    </p>
  </div>
);

export default Homepage;
