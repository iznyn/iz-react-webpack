/**
 * components/Form/Input/Text.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Base from './Base';

const InputText = (props) => {
  const {
    name,
    type,
    className,
    style,
    defaultValue,
    validator,
    ...others
  } = props;

  return (
    <Base
      name={name}
      className={className}
      style={style}
      defaultValue={defaultValue}
      validator={validator}
      onRender={(field) => (
        <input type={type} id={`input-${name}`} {...field} {...others} />
      )}
    />
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
  defaultValue: PropTypes.any,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default InputText;
