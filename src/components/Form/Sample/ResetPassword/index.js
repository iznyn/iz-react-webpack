/**
 * components/Form/Sample/ResetPassword/index.js
 */
import React from 'react';

import { register as registerService } from 'services/http/test';
import FormBase from '../../index';
import Form from './Form';

const ResetPassword = () => (
  <FormBase
    service={registerService}
    successMessage="Your password has been changed"
    errorMessage="Your password failed to changed."
    buttonSubmitLabel="Change Password"
    onRenderFields={(formHook) => <Form formHook={formHook} />}
  />
);

export default ResetPassword;
