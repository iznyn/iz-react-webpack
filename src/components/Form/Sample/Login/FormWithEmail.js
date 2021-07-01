/**
 * components/Form/Sample/Login/FormWithEmail.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import FieldText from 'components/Form/Field/Text';
import FieldPassword from 'components/Form/Field/Password';
import FieldCheckbox from 'components/Form/Field/Checkbox';

// eslint-disable-next-line no-useless-escape
const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const FormLogin = ({ formHook }) => (
  <div className="form__fields">
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
    <FieldCheckbox name="remember_me" inputLabel="Remember Me" value="1" />
  </div>
);

FormLogin.propTypes = {
  formHook: PropTypes.object,
};

export default FormLogin;
