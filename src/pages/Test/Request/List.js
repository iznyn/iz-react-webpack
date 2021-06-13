/**
 * pages/Test/Request/index.js
 */

import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items }) => {
  console.log('TestRequest > List');

  return (
    <div className="list">
      {items.map(() => (
        <div className="item">
          <h3>Item</h3>
        </div>
      ))}
      <div />
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
