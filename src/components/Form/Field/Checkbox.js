/**
 * components/Form/Field/Checkbox.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import InputCheckbox from '../Input/Checkbox';

const FieldCheckbox = (props) => {
  const {
    name,
    defaultValue,
    inputLabel,
    inputProps,
    checked,
    validator,
    ...others
  } = props;

  return (
    <Layout name={name} validator={validator} {...others}>
      <InputCheckbox
        name={name}
        label={inputLabel}
        defaultValue={defaultValue}
        validator={validator}
        checked={checked}
        {...inputProps}
      />
    </Layout>
  );
};

FieldCheckbox.defaultProps = {
  style: 'block',
};

FieldCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['block', 'inline']),
  label: PropTypes.string,
  info: PropTypes.node,
  defaultValue: PropTypes.any,
  checked: PropTypes.bool,
  inputProps: PropTypes.object,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default FieldCheckbox;
