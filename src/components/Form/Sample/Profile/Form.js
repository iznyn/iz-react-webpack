/**
 * components/Form/Sample/Register/Form.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import FieldText from 'components/Form/Field/Text';
import FieldCheckbox from 'components/Form/Field/Checkbox';
import FieldRadio from 'components/Form/Field/Radio';
import FieldSelect from 'components/Form/Field/Select';
import FieldPhoto from 'components/Form/Field/Image/WithCrop';

// eslint-disable-next-line no-useless-escape
const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// eslint-disable-next-line no-useless-escape
const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const FormLogin = ({ formHook }) => (
  <div className="form__fields">
    <FieldText
      name="username"
      label="Username"
      inputProps={{
        value: 'member',
        disabled: true,
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
      name="first_name"
      label="First Name"
      validator={{
        hook: formHook,
        rules: { required: true },
        messages: {
          required: 'Your must enter the first name',
        },
      }}
    />
    <FieldText name="last_name" label="Last Name" />
    <FieldText
      name="phone"
      label="Phone Number"
      validator={{
        hook: formHook,
        rules: { pattern: phonePattern },
        messages: {
          pattern: 'Your must enter a valid phone number.',
        },
      }}
    />
    <FieldPhoto
      name="photo"
      label="Photo Profile"
      defaultImage="https://dummyimage.com/600x600/b0b0b0/ffffff.jpg&text=No+Image"
      validator={{
        hook: formHook,
        rules: { required: true },
        messages: {
          required: 'Your must select the photo profile.',
        },
      }}
    />
    <FieldRadio
      name="gender"
      label="Gender"
      data={[
        {
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
      ]}
      validator={{
        hook: formHook,
        rules: { required: true },
        messages: {
          required: 'Your must select the gender.',
        },
      }}
    />
    <FieldSelect
      name="job"
      label="Job"
      placeholder="- Select Your Job -"
      data={[
        {
          label: 'Frontend Developer',
          value: 'frontend-developer',
        },
        {
          label: 'Backend Developer',
          value: 'backend-developer',
        },
        {
          label: 'Designer',
          value: 'designer',
        },
        {
          label: 'Project Manager',
          value: 'project-manager',
        },
      ]}
      validator={{
        hook: formHook,
        rules: { required: true },
        messages: {
          required: 'Your must select the gender.',
        },
      }}
    />
    <FieldCheckbox
      name="agreement"
      inputLabel="I agree with your terms and conditions."
      validator={{
        hook: formHook,
        rules: { required: true },
        messages: {
          required: 'Your must agree with our terms and conditions.',
        },
      }}
    />
  </div>
);

FormLogin.propTypes = {
  formHook: PropTypes.object,
};

export default FormLogin;
