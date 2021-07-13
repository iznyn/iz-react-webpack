/**
 * components/Form/Sample/ResetPassword/Form.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import FieldPassword from 'components/Form/Field/Password';

// eslint-disable-next-line no-useless-escape
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\-\_\+\(\)])(?=.{6,})/i;

const FormResetPassword = ({ formHook }) => {
  const { watch } = formHook;
  const currentPassword = watch('new_password', '');

  return (
    <>
      <FieldPassword
        name="old_password"
        label="Old Password"
        validator={{
          hook: formHook,
          rules: { required: true },
          messages: {
            required: 'Your must enter the old password',
          },
        }}
      />
      <FieldPassword
        name="new_password"
        label="New Password"
        validator={{
          hook: formHook,
          rules: { required: true, minLength: 6, pattern: passwordPattern },
          messages: {
            required: 'Your must enter the new password',
            minLength: 'Your new password must have minimal 6 character',
            pattern:
              'Your password must contain uppercase, lowercase, numeric and special character.',
          },
        }}
      />
      <FieldPassword
        name="new_password_confirmation"
        label="New Password Confirmation"
        validator={{
          hook: formHook,
          rules: {
            required: true,
            validate: (value) => value === currentPassword,
          },
          messages: {
            required: 'Your must re-enter the new password',
            validate: 'Your password confirmation do not match',
          },
        }}
      />
    </>
  );
};

FormResetPassword.propTypes = {
  formHook: PropTypes.object,
};

export default FormResetPassword;
