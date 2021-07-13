/**
 * components/Form/Sample/ForgotPassword/Form.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import FieldText from 'components/Form/Field/Text';

// eslint-disable-next-line no-useless-escape
const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const FormLogin = ({ formHook }) => (
  <>
    <FieldText
      name="email"
      label="Email"
      validator={{
        hook: formHook,
        rules: { required: true, pattern: emailPattern },
        messages: {
          required: 'Your must enter the email',
          pattern: 'Your must enter a valid email.',
        },
      }}
    />
  </>
);

FormLogin.propTypes = {
  formHook: PropTypes.object,
};

export default FormLogin;
