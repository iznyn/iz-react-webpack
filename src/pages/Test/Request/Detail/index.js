/**
 * pages/Test/Request/index.js
 */

import React from 'react';

import { getUser } from 'services/http/test';
import RequestDetail from 'components/Request/Detail';

import Sidebar from '../Sidebar';
import Content from './Content';

const TestDetail = () => {
  console.log('Test Request > Detail');

  return (
    <div className="root">
      <div style={{ padding: 40 }}>
        <div className="test__alert">
          <h1 style={{ marginBottom: 30 }}>Test Request</h1>
        </div>
        <RequestDetail
          name="user"
          service={getUser}
          onRenderContent={(data) => <Content data={data} />}
        />
        <Sidebar />
      </div>
    </div>
  );
};

export default TestDetail;
