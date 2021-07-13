/**
 * pages/Test/Form/Contact.js
 */

import React from 'react';
import FormContact from 'components/Form/Sample/Contact';

const TestFormContact = () => (
  <div className="root">
    <div style={{ padding: 40 }}>
      <div className="test__form">
        <h1 style={{ marginBottom: 30 }}>Test Form Contact</h1>
        <div
          style={{
            marginTop: 30,
          }}
        >
          <FormContact />
        </div>
      </div>
    </div>
  </div>
);

export default TestFormContact;
