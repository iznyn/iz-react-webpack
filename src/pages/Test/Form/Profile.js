/**
 * pages/Test/Form/Profile.js
 */

import React from 'react';
import FormProfile from 'components/Form/Sample/Profile';

const TestFormProfile = () => (
  <div className="root">
    <div style={{ padding: 40 }}>
      <div className="test__form">
        <h1 style={{ marginBottom: 30 }}>Test Form Profile</h1>
        <div
          style={{
            marginTop: 30,
          }}
        >
          <FormProfile />
        </div>
      </div>
    </div>
  </div>
);

export default TestFormProfile;
