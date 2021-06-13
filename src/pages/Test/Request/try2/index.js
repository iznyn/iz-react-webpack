/**
 * pages/Test/Request/index.js
 */

import React from 'react';
import { useAppRequest } from 'hooks/Request';
import { getUsers } from 'services/http/test';

import List from './List';
import Sidebar from './Sidebar';

const TestRequest = () => {
  const query = useAppRequest('users', getUsers);
  console.log('TestRequest');
  console.log(query.data);

  return (
    <div className="root">
      <div style={{ padding: 40 }}>
        <div className="test__alert">
          <h1 style={{ marginBottom: 30 }}>Test Request</h1>
        </div>
        {query.data ? <List items={query.data.data.data} /> : <p>Empty</p>}
        <Sidebar />
      </div>
    </div>
  );
};

export default TestRequest;
