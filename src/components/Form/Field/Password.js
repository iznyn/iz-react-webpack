/**
 * components/Form/Field/Layout.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import InputPassword from '../Input/Password';

const FieldPassword = (props) => {
  const {
    name,
    placeholder,
    defaultValue,
    seePasswordButton,
    inputProps,
    validator,
    ...others
  } = props;

  return (
    <Layout name={name} validator={validator} {...others}>
      <InputPassword
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        seePasswordButton={seePasswordButton}
        validator={validator}
        {...inputProps}
      />
    </Layout>
  );
};

FieldPassword.defaultProps = {
  style: 'block',
  seePasswordButton: true,
};

FieldPassword.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['block', 'inline']),
  label: PropTypes.string,
  info: PropTypes.node,
  defaultValue: PropTypes.any,
  placeholder: PropTypes.string,
  inputProps: PropTypes.object,
  seePasswordButton: PropTypes.bool,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default FieldPassword;
