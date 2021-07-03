/**
 * components/Form/Field/Radio.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import InputSelect from '../Input/Select';

const FieldSelect = (props) => {
  const {
    name,
    data,
    defaultValue,
    placeholder,
    inputProps,
    validator,
    ...others
  } = props;

  return (
    <Layout name={name} validator={validator} {...others}>
      <InputSelect
        name={name}
        data={data}
        placeholder={placeholder}
        defaultValue={defaultValue}
        validator={validator}
        {...inputProps}
      />
    </Layout>
  );
};

FieldSelect.defaultProps = {
  style: 'block',
};

FieldSelect.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['block', 'inline']),
  label: PropTypes.string,
  info: PropTypes.node,
  defaultValue: PropTypes.any,
  inputProps: PropTypes.object,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default FieldSelect;
