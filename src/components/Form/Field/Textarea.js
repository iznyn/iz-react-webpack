/**
 * components/Form/Field/Textarea.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import InputTextarea from '../Input/Textarea';

const FieldTextarea = (props) => {
  const {
    name,
    defaultValue,
    placeholder,
    inputProps,
    validator,
    ...others
  } = props;

  return (
    <Layout name={name} validator={validator} {...others}>
      <InputTextarea
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        validator={validator}
        {...inputProps}
      />
    </Layout>
  );
};

FieldTextarea.defaultProps = {
  style: 'block',
};

FieldTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['block', 'inline']),
  label: PropTypes.string,
  info: PropTypes.node,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
  defaultValue: PropTypes.any,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default FieldTextarea;
