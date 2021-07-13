/**
 * components/Form/Sample/Newsletter/index.js
 */
import React from 'react';

import { contact as contactService } from 'services/http/test';
import FormBase from '../../index';
import Form from './Form';

const Contact = () => (
  <FormBase
    className="form--inline"
    service={contactService}
    successMessage="Newsletter is successfully."
    errorMessage="Newsletter is failed."
    buttonSubmitLabel="Send"
    onRenderFields={(formHook) => <Form formHook={formHook} />}
  />
);

export default Contact;
