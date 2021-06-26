/**
 * components/Form/Input/Text.js
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';

import Base from './Base';

const InputPassword = (props) => {
  const {
    name,
    className,
    style,
    seePasswordButton,
    defaultValue,
    validator,
    ...others
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Base
      name={name}
      defaultValue={defaultValue}
      validator={validator}
      className={className}
      style={style}
      type="password"
      onRender={(field) => (
        <>
          <input
            type={showPassword ? 'text' : 'password'}
            id={`input-${name}`}
            {...field}
            {...others}
          />
          {seePasswordButton && (
            <div className="form__input__adornment form__input__adornment--end">
              <button
                data-tip
                data-for="see-password-info"
                type="button"
                onClick={(evt) => {
                  evt.preventDefault();
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <IoEye /> : <IoEyeOff />}
              </button>
              <ReactTooltip
                id="see-password-info"
                className="form__input__tooltip"
                type="dark"
                effect="solid"
              >
                <span>{showPassword ? 'Hide Password' : 'Show Password'}</span>
              </ReactTooltip>
            </div>
          )}
        </>
      )}
    />
  );
};

InputPassword.defaultProps = {
  style: 'default',
  seePasswordButton: true,
};

InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['default']),
  seePasswordButton: PropTypes.bool,
  defaultValue: PropTypes.any,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default InputPassword;
