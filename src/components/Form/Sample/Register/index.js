/**
 * components/Form/Sample/Register/index.js
 */
import React from 'react';

import { register as registerService } from 'services/http/test';
import FormBase from '../../index';
import Form from './Form';

const Register = () => (
  <FormBase
    service={registerService}
    successMessage="Register successfully"
    errorMessage="Registration has failed."
    buttonSubmitLabel="Register"
    onRenderFields={(formHook) => <Form formHook={formHook} />}
  />
);

export default Register;
