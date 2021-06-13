/**
 * components/Header/index.js
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'components/Container';
import HeaderNav from './Nav';

const Header = () => {
  console.log('Header');
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <div className="header__main">
            <NavLink to="/">My Site</NavLink>
          </div>
          <div className="header__nav">
            <HeaderNav />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
