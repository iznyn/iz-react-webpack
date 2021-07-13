/**
 * components/Form/Sample/Contact/Form.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import FieldText from 'components/Form/Field/Text';
import FieldTextarea from 'components/Form/Field/Textarea';

// eslint-disable-next-line no-useless-escape
const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// eslint-disable-next-line no-useless-escape
const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const FormLogin = ({ formHook }) => (
  <>
    <FieldText
      name="name"
      label="Full Name"
      validator={{
        hook: formHook,
        rules: { required: true },
        messages: {
          required: 'Your must enter your email',
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
    <FieldText
      name="phone"
      label="Phone Number"
      validator={{
        hook: formHook,
        rules: { required: true, pattern: phonePattern },
        messages: {
          required: 'Your must enter the phone number',
          pattern: 'Your must enter a valid phone number.',
        },
      }}
    />
    <FieldTextarea
      name="message"
      label="Message"
      validator={{
        hook: formHook,
        rules: { required: true },
        messages: {
          required: 'Your must enter the message.',
        },
      }}
    />
  </>
);

FormLogin.propTypes = {
  formHook: PropTypes.object,
};

export default FormLogin;
