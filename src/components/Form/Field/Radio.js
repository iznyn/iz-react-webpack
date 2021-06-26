/**
 * components/Form/Field/Radio.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import InputRadio from '../Input/Radio';

const FieldRadio = (props) => {
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
      <InputRadio
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

FieldRadio.defaultProps = {
  style: 'block',
};

FieldRadio.propTypes = {
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

export default FieldRadio;
