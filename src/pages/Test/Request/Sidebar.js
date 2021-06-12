/**
 * pages/Test/Request/index.js
 */

import React, { memo } from 'react';

const Sidebar = () => {
  console.log('Test Sidebar');

  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <p>This is a sidebar</p>
    </div>
  );
};

export default memo(Sidebar);
