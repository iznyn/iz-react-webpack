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
    successMessage="Your message is saved."
    errorMessage="Your message is failed to save."
    buttonSubmitLabel="Send Message"
    onRenderFields={(formHook) => <Form formHook={formHook} />}
  />
);

export default Contact;
