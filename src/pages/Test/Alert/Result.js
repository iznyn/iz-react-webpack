/**
 * pages/Test/Alert/Result.js
 */

import React, { useEffect } from 'react';
import { useModalAlert } from 'components/Modal/Alert/Hook';

const TestAlert = () => {
  const { showModalAlert } = useModalAlert();

  useEffect(() => {
    setTimeout(() => {
      showModalAlert(
        'Sorry your action can be do because some server error.',
        'Failed',
        'danger',
      );
    }, 3000);
  }, []);

  return (
    <div className="root">
      <div style={{ padding: 40 }}>
        <div className="test__alert">
          <h1 style={{ marginBottom: 30 }}>Test Alert Result</h1>
        </div>
      </div>
    </div>
  );
};

export default TestAlert;
