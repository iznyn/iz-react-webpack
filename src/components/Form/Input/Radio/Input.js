/**
 * components/Form/Input/Radio/Input.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Base from '../Base';

const InputRadio = (props) => {
  const {
    name,
    label,
    className,
    style,
    defaultValue,
    checked,
    validator,
    onChange,
    ...others
  } = props;

  return (
    <Base
      name={name}
      className={className}
      style={style}
      defaultValue={defaultValue}
      validator={validator}
      onRender={(field) => {
        const { onChange: onFieldChange, fieldOthers } = field;
        return (
          <label className="checkbox checkbox--radio">
            <input
              type="radio"
              id={`input-${name}`}
              checked={checked}
              onChange={(evt) => {
                onChange(evt);
                onFieldChange(evt.currentTarget.value);
              }}
              {...fieldOthers}
              {...others}
            />
            <div className="checkbox__indicator"></div>
            <span className="checkbox__label">{label}</span>
          </label>
        );
      }}
    />
  );
};

InputRadio.defaultProps = {
  style: 'default',
};

InputRadio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['default']),
  defaultValue: PropTypes.any,
  checked: PropTypes.bool,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default InputRadio;
