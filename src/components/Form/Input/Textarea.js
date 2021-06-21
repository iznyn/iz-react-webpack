/**
 * components/Form/Input/Text.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Base from './Base';

const InputTextarea = (props) => {
  const { name, value, className, style, ...others } = props;

  return (
    <Base className={className} style={style}>
      <textarea name={name} {...others}>
        {value}
      </textarea>
    </Base>
  );
};

InputTextarea.defaultProps = {
  style: 'default',
};

InputTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['default']),
};

export default InputTextarea;
