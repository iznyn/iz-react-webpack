/**
 * pages/Test/Request/index.js
 */

import React from 'react';

import { getUsers } from 'services/http/test';
import RequestList from 'components/Request/List/WithLoadMore';

import Sidebar from '../Sidebar';
import Item from './Item';

const TestLoadMore = () => {
  console.log('Test Request > Load More');

  return (
    <div className="root">
      <div style={{ padding: 40 }}>
        <div className="test__alert">
          <h1 style={{ marginBottom: 30 }}>Test Request</h1>
        </div>
        <RequestList
          name="users"
          service={(page) => getUsers(page)}
          onRenderItem={(data) => <Item data={data} />}
        />
        <Sidebar />
      </div>
    </div>
  );
};

export default TestLoadMore;
