/**
 * components/Form/Field/File.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import InputFile from '../Input/File';
import Layout from './Layout';

const FieldFile = (props) => {
  const {
    name,
    defaultValue,
    inputLabel,
    inputProps,
    onSelect,
    validator,
    ...others
  } = props;

  return (
    <Layout name={name} validator={validator} {...others}>
      <InputFile
        name={name}
        label={inputLabel}
        defaultValue={defaultValue}
        validator={validator}
        onSelect={onSelect}
        {...inputProps}
      />
    </Layout>
  );
};

FieldFile.defaultProps = {
  style: 'block',
};

FieldFile.propTypes = {
  name: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['block', 'inline']),
  label: PropTypes.string,
  info: PropTypes.node,
  defaultValue: PropTypes.any,
  onSelect: PropTypes.func,
  inputProps: PropTypes.object,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default FieldFile;
