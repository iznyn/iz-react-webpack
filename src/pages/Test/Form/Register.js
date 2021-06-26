/**
 * pages/Test/Form/Register.js
 */

import React from 'react';
import FormRegister from 'components/Form/Sample/Register';

const TestFormRegister = () => (
  <div className="root">
    <div style={{ padding: 40 }}>
      <div className="test__form">
        <h1 style={{ marginBottom: 30 }}>Test Form Register</h1>
        <div
          style={{
            marginTop: 30,
          }}
        >
          <FormRegister />
        </div>
      </div>
    </div>
  </div>
);

export default TestFormRegister;
