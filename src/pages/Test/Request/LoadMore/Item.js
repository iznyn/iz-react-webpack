/**
 * pages/Test/Request/index.js
 */

import React from 'react';
import PropTypes from 'prop-types';

const TestLoadMoreItem = ({ data }) => {
  console.log('Test Request > Load More > Item');

  return (
    <div className="user__detail">
      <h3>
        {data.last_name}, {data.first_name}
      </h3>
      <p>
        <img src={data.avatar} alt="" />
      </p>
    </div>
  );
};

TestLoadMoreItem.propTypes = {
  data: PropTypes.object,
};

export default TestLoadMoreItem;
