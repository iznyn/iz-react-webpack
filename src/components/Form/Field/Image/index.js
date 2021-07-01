/**
 * components/Form/Field/File.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import InputImage from '../../Input/Image';
import Layout from '../Layout';

const FieldImage = (props) => {
  const {
    name,
    defaultImage,
    buttonLabel,
    buttonClassName,
    info,
    inputProps,
    onSelect,
    validator,
    ...others
  } = props;

  return (
    <Layout name={name} validator={validator} {...others}>
      <InputImage
        name={name}
        buttonLabel={buttonLabel}
        buttonClassName={buttonClassName}
        defaultImage={defaultImage}
        info={info}
        validator={validator}
        onSelect={onSelect}
        {...inputProps}
      />
    </Layout>
  );
};

FieldImage.defaultProps = {
  style: 'block',
};

FieldImage.propTypes = {
  name: PropTypes.string.isRequired,
  buttonLabel: PropTypes.node,
  buttonClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['block', 'inline']),
  defaultImage: PropTypes.string,
  info: PropTypes.string,
  onSelect: PropTypes.func,
  inputProps: PropTypes.object,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default FieldImage;
