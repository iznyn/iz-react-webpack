/**
 * components/Form/Text.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import FieldText from 'components/Form/Field/Text';
import FieldPassword from 'components/Form/Field/Password';

const FormLogin = ({ formHook }) => (
  <div className="form__fields">
    <FieldText
      name="username"
      label="Username"
      validator={{
        hook: formHook,
        rules: { required: true },
        messages: {
          required: 'Your must enter the username',
        },
      }}
    />
    <FieldPassword
      name="password"
      label="Password"
      validator={{
        hook: formHook,
        rules: { required: true, minLength: 6 },
        messages: {
          required: 'Your must enter the password',
          minLength: 'Your password must have minimal 6 character',
        },
      }}
    />
  </div>
);

FormLogin.propTypes = {
  formHook: PropTypes.object,
};

export default FormLogin;
