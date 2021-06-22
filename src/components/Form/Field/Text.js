/**
 * components/Form/Field/Layout.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import InputText from '../Input/Text';

const FieldText = (props) => {
  const {
    name,
    type,
    defaultValue,
    placeholder,
    inputProps,
    validator,
    ...others
  } = props;

  return (
    <Layout name={name} validator={validator} {...others}>
      <InputText
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        validator={validator}
        {...inputProps}
      />
    </Layout>
  );
};

FieldText.defaultProps = {
  style: 'block',
  type: 'text',
};

FieldText.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['block', 'inline']),
  label: PropTypes.string,
  info: PropTypes.node,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.any,
  inputProps: PropTypes.object,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default FieldText;
