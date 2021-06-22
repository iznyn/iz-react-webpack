import React from 'react';

import FieldPassword from '../../components/Form/Field/Password';

export default {
  title: 'Form/Field Password',
  component: FieldPassword,
};

const Template = (args) => <FieldPassword {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'password',
  label: 'Your Password',
  value: 'password',
  placeholder: 'Your Password',
};
