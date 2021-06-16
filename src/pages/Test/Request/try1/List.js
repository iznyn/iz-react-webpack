/**
 * pages/Test/Request/index.js
 */

import React from 'react';
import { useAppRequest } from 'hooks/Request';
import { getUsers } from 'services/http/test';

const List = () => {
  const query = useAppRequest('users', getUsers);
  console.log('TestRequest > List');
  console.log(query.data);

  return (
    <div className="list">
      {query.data ? (
        <>
          {query.data.data.data.map(() => (
            <div className="item">
              <h3>Item</h3>
            </div>
          ))}
        </>
      ) : (
        <p>Empty</p>
      )}
      <div />
    </div>
  );
};

export default List;
