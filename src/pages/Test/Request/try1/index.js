/**
 * pages/Test/Request/index.js
 */

import React from 'react';

import List from './List';
import Sidebar from '../Sidebar';

const TestRequest = () => {
  console.log('TestRequest');

  return (
    <div className="root">
      <div style={{ padding: 40 }}>
        <div className="test__alert">
          <h1 style={{ marginBottom: 30 }}>Test Request</h1>
        </div>
        <List />
        <Sidebar />
      </div>
    </div>
  );
};

export default TestRequest;
