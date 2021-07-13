/**
 * components/Form/Sample/Contact/index.js
 */
import React from 'react';

import { contact as contactService } from 'services/http/test';
import FormBase from '../../index';
import Form from './Form';

const Contact = () => (
  <FormBase
    service={contactService}
    successMessage="Change password instruction has sent. Please check your email."
    errorMessage="Failed to change password instruction."
    buttonSubmitLabel="Send Instruction"
    onRenderFields={(formHook) => <Form formHook={formHook} />}
  />
);

export default Contact;
