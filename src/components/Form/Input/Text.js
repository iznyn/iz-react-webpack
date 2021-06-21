/**
 * components/Form/Input/Text.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Base from './Base';

const InputText = (props) => {
  const { name, type, className, style, ...others } = props;

  return (
    <Base className={className} style={style}>
      <input type={type} name={name} {...others} />
    </Base>
  );
};

InputText.defaultProps = {
  type: 'text',
  style: 'default',
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['default']),
};

export default InputText;
