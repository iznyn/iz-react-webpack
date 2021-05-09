/**
 * components/Layout/Container/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Container = ({ children, size, className, ...others }) => {
  // let sizeClasses = classes.full;
  // if (classes[size] !== undefined) {
  //   sizeClasses = classes[size];
  // }
  const sizeClasses = `container--${size}`;

  return (
    <div
      className={classNames('container', sizeClasses, className)}
      {...others}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Container;
