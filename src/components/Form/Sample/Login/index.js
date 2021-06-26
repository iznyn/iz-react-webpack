/**
 * components/Form/Sample/Login/index.js
 */
import React from 'react';

import { login as loginService } from 'services/http/test';
import FormBase from '../../index';
import Form from './FormWithEmail';

const FormLogin = () => (
  <FormBase
    service={loginService}
    successMessage="Login successfully"
    errorMessage="Username/password is wrong"
    buttonSubmitLabel="Login"
    onRenderFields={(formHook) => <Form formHook={formHook} />}
  />
);

export default FormLogin;
