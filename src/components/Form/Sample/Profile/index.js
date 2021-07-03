/**
 * components/Form/Sample/Profile/index.js
 */
import React from 'react';

import { register as registerService } from 'services/http/test';
import FormBase from '../../index';
import Form from './Form';

const Profile = () => (
  <FormBase
    service={registerService}
    successMessage="Profile is saved."
    errorMessage="Profile is failed to save."
    buttonSubmitLabel="Profile"
    onRenderFields={(formHook) => <Form formHook={formHook} />}
  />
);

export default Profile;
