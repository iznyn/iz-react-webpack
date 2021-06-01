/**
 * components/Button/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, ...others }) => (
  <button type="button" className="button" {...others}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
