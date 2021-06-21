/**
 * components/Form/Field/Layout.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import InputTextarea from '../Input/Textarea';

const FieldTextarea = (props) => {
  const { name, placeholder, value, onChange, inputProps, ...others } = props;

  return (
    <Layout {...others}>
      <InputTextarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </Layout>
  );
};

FieldTextarea.defaultProps = {
  style: 'block',
};

FieldTextarea.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['block', 'inline']),
  label: PropTypes.string,
  info: PropTypes.node,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
};

export default FieldTextarea;
