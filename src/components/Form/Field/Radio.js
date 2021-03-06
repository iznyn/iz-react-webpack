/**
 * components/Form/Field/Radio.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import InputRadio from '../Input/Radio';

const FieldRadio = (props) => {
  const { name, data, defaultValue, inputProps, validator, ...others } = props;

  return (
    <Layout name={name} validator={validator} {...others}>
      <InputRadio
        name={name}
        data={data}
        defaultValue={defaultValue}
        validator={validator}
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }),
  ).isRequired,
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

export default FieldRadio;
