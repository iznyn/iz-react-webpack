/**
 * pages/Test/Confirm/index.js
 */

import React from 'react';
import FormLogin from 'components/Form/Sample/Login';

const TestFormLogin = () => (
  <div className="root">
    <div style={{ padding: 40 }}>
      <div className="test__form">
        <h1 style={{ marginBottom: 30 }}>Test Form Login</h1>
        <div
          style={{
            marginTop: 30,
          }}
        >
          <FormLogin />
        </div>
      </div>
    </div>
  </div>
);

export default TestFormLogin;
