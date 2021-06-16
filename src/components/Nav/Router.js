/**
 * Seo/index.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavRouter = ({ to, children, activeClass, ...others }) => (
  <NavLink
    exact
    to={to}
    activeClassName={activeClass || 'is-active'}
    {...others}
  >
    {children}
  </NavLink>
);

NavRouter.propTypes = {
  to: PropTypes.string,
  activeClass: PropTypes.string,
  children: PropTypes.node,
};

export default NavRouter;
