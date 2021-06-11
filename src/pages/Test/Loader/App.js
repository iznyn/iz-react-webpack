/**
 * pages/Test/App/Loader.js
 */

import React, { useEffect } from 'react';
import { useAppLoader } from 'components/Loader/App/Hook';

const TestAppLoader = () => {
  const { showLoader } = useAppLoader();

  useEffect(() => {
    setTimeout(() => {
      showLoader();
    }, 3000);
  }, []);

  return (
    <div className="root">
      <div style={{ padding: 40 }}>
        <div className="test__alert">
          <h1 style={{ marginBottom: 30 }}>Test App Loader</h1>
        </div>
      </div>
    </div>
  );
};

export default TestAppLoader;
