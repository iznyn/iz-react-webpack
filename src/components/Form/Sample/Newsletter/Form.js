/**
 * components/Form/Sample/Newsletter/Form.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import FieldText from 'components/Form/Field/Text';

// eslint-disable-next-line no-useless-escape
const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const FormNewsletter = ({ formHook }) => (
  <>
    <FieldText
      name="email"
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

FormNewsletter.propTypes = {
  formHook: PropTypes.object,
};

export default FormNewsletter;
