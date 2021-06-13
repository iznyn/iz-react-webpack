/**
 * components/Header/index.js
 */
import React from 'react';

import Nav from 'components/Nav/Router';

const HeaderNav = () => {
  console.log('Nav');
  return (
    <div className="nav nav--horizontal">
      <ul>
        <li>
          <Nav to="/">Home</Nav>
        </li>
        <li>
          <Nav to="/about">About</Nav>
        </li>
        <li>
          <Nav to="/contact">Contact</Nav>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNav;
