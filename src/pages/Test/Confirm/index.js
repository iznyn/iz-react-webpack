/**
 * pages/Test/Confirm/index.js
 */

import React from 'react';
import Confirm from 'components/Modal/Confirm';

const TestAlert = () => (
  <div className="root">
    <div style={{ padding: 40 }}>
      <div className="test__alert">
        <h1 style={{ marginBottom: 30 }}>Test Alert</h1>
        <div
          style={{
            marginTop: 30,
          }}
        >
          <Confirm open title="Delete Confirm">
            Are you sure to do this action? This is can not be undone.
          </Confirm>
        </div>
      </div>
    </div>
  </div>
);

export default TestAlert;
