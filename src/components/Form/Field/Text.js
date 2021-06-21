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
    placeholder,
    value,
    onChange,
    inputProps,
    ...others
  } = props;

  return (
    <Layout {...others}>
      <InputText
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['block', 'inline']),
  label: PropTypes.string,
  info: PropTypes.node,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
};

export default FieldText;
