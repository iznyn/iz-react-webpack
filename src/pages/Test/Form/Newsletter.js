/**
 * pages/Test/Form/Newsletter.js
 */

import React from 'react';
import FormNewsletter from 'components/Form/Sample/Newsletter';

const TestFormNewsletter = () => (
  <div className="root">
    <div style={{ padding: 40 }}>
      <div className="test__form">
        <h1 style={{ marginBottom: 30 }}>Test Form Newsletter</h1>
        <div
          style={{
            marginTop: 30,
          }}
        >
          <h3 style={{ marginBottom: 20 }}>Newsletter</h3>
          <FormNewsletter />
        </div>
      </div>
    </div>
  </div>
);

export default TestFormNewsletter;
