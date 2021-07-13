/**
 * pages/Test/Form/ResetPassword.js
 */

import React from 'react';
import FormResetPassword from 'components/Form/Sample/ResetPassword';

const TestFormResetPassword = () => (
  <div className="root">
    <div style={{ padding: 40 }}>
      <div className="test__form">
        <h1 style={{ marginBottom: 30 }}>Test Form Reset Password</h1>
        <div
          style={{
            marginTop: 30,
          }}
        >
          <FormResetPassword />
        </div>
      </div>
    </div>
  </div>
);

export default TestFormResetPassword;
