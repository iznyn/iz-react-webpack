/**
 * components/Form/Sample/Register/Form.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import FieldText from 'components/Form/Field/Text';
import FieldPassword from 'components/Form/Field/Password';
import FieldCheckbox from 'components/Form/Field/Checkbox';

// eslint-disable-next-line no-useless-escape
const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// eslint-disable-next-line no-useless-escape
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\-\_\+\(\)])(?=.{6,})/i;

// eslint-disable-next-line no-useless-escape
const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const FormLogin = ({ formHook }) => {
  const { watch } = formHook;
  const currentPassword = watch('password', '');

  return (
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
          rules: { required: true, minLength: 6, pattern: passwordPattern },
          messages: {
            required: 'Your must enter the password',
            minLength: 'Your password must have minimal 6 character',
            pattern:
              'Your password must contain uppercase, lowercase, numeric and special character.',
          },
        }}
      />
      <FieldPassword
        name="password_confirmation"
        label="Password Confirmation"
        validator={{
          hook: formHook,
          rules: {
            required: true,
            validate: (value) => value === currentPassword,
          },
          messages: {
            required: 'Your must enter the password',
            validate: 'Your password confirmation do not match',
          },
        }}
      />
      <FieldText
        name="first_name"
        label="First Name"
        validator={{
          hook: formHook,
          rules: { required: true },
          messages: {
            required: 'Your must enter the first name',
          },
        }}
      />
      <FieldText name="last_name" label="Last Name" />
      <FieldText
        name="phone"
        label="Phone Number"
        validator={{
          hook: formHook,
          rules: { pattern: phonePattern },
          messages: {
            pattern: 'Your must enter a valid phone number.',
          },
        }}
      />
      <FieldCheckbox
        name="agreement"
        inputLabel="I agree with your terms and conditions."
        validator={{
          hook: formHook,
          rules: { required: true },
          messages: {
            required: 'Your must agree with our terms and conditions.',
          },
        }}
      />
    </div>
  );
};

FormLogin.propTypes = {
  formHook: PropTypes.object,
};

export default FormLogin;
