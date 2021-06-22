/**
 * components/Form/Error/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';

const FormError = ({ errors, name, messages }) => {
  let message = 'Error';
  let isError = false;

  if (errors && typeof errors[name] !== 'undefined') {
    isError = true;
    const { type } = errors[name];
    if (messages && typeof messages[type] !== 'undefined') {
      message = messages[type];
    }
  }

  if (isError) {
    return <Layout error={message} />;
  }
  return null;
};

FormError.propTypes = {
  errors: PropTypes.object,
  messages: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormError;
