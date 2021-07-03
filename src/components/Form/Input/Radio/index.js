/**
 * components/Form/Input/Radio/index.js
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputRadio from './Input';

const RadioGroup = (props) => {
  const { name, defaultValue, data, ...others } = props;

  const [value, setValue] = useState(defaultValue);

  return (
    <div className="checkbox__group">
      {data.map((item) => (
        <InputRadio
          key={`radio-${name}-${item.value}`}
          name={name}
          label={item.label}
          value={item.value}
          checked={value === item.value}
          onChange={(evt) => {
            setValue(evt.currentTarget.value);
          }}
          {...others}
        />
      ))}
    </div>
  );
};

RadioGroup.defaultProps = {
  style: 'default',
};

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }),
  ).isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['default']),
  defaultValue: PropTypes.any,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default RadioGroup;
