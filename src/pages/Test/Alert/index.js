/**
 * pages/Homepage/index.js
 */

import React from 'react';
import ModalAlert from 'components/Modal/Alert';

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
          <ModalAlert
            open
            title="Alert Danger"
            variant="warning"
            buttonLabel="Close Alert"
          >
            This example for alert danger.
          </ModalAlert>
        </div>
      </div>
    </div>
  </div>
);

export default TestAlert;
