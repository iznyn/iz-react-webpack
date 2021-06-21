/**
 * components/Form/Input/Text.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const InputBase = (props) => {
  const { className, style, children } = props;

  return (
    <div
      className={classNames('form__input', `form__input--${style}`, className)}
    >
      {children}
    </div>
  );
};

InputBase.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default InputBase;
