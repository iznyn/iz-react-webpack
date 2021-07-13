/**
 * pages/Test/Form/ForgotPassword.js
 */

import React from 'react';
import FormForgotPassword from 'components/Form/Sample/ForgotPassword';

const TestFormForgotPassword = () => (
  <div className="root">
    <div style={{ padding: 40 }}>
      <div className="test__form">
        <h1 style={{ marginBottom: 30 }}>Test Form Forgot Password</h1>
        <div
          style={{
            marginTop: 30,
          }}
        >
          <FormForgotPassword />
        </div>
      </div>
    </div>
  </div>
);

export default TestFormForgotPassword;
