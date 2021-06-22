/**
 * components/Form/Input/Text.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Controller } from 'react-hook-form';

const InputBase = (props) => {
  const { className, name, defaultValue, style, onRender, validator } = props;

  const renderInput = () => {
    const { hook, rules } = validator;
    const { control } = hook;

    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => onRender(field)}
      />
    );
  };

  return (
    <div
      className={classNames('form__input', `form__input--${style}`, className)}
    >
      {validator ? renderInput() : <>{onRender({})}</>}
    </div>
  );
};

InputBase.defaultProps = {
  defaultValue: '',
};

InputBase.propTypes = {
  name: PropTypes.string.isRequired,
  onRender: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['default']),
  defaultValue: PropTypes.any,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default InputBase;
