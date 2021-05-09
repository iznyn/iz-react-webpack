/**
 * components/Layout/Container/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useStyles from './styles';

const Container = ({ children, size, className, ...others }) => {
  const classes = useStyles();
  let sizeClasses = classes.full;
  if (classes[size] !== undefined) {
    sizeClasses = classes[size];
  }

  return (
    <div
      className={classNames(classes.root, sizeClasses, className)}
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
