/**
 * components/Form/Input/Text.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Base from './Base';

const InputTextarea = (props) => {
  const {
    name,
    value,
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
        <textarea id={`input-${name}`} {...field} {...others}>
          {value}
        </textarea>
      )}
    />
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
  defaultValue: PropTypes.any,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default InputTextarea;
