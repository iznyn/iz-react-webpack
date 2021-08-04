/**
 * components/Header/Fixed.js
 */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import Container from 'components/Container';
import HeaderNav from './Nav';

const FixedHeader = () => {
  const [isFixed, setIsFixed] = useState(false);

  const headerFixed = () => {
    const isTop = window.scrollY > 90;
    if (isTop) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFixed);

    return function cleanup() {
      window.removeEventListener('scroll', headerFixed);
    };
  }, []);

  return (
    <header className={classNames('header', { 'header--fixed': isFixed })}>
      <div className="header__sticky">
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
      </div>
    </header>
  );
};

export default FixedHeader;
