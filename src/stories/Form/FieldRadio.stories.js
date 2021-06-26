import React from 'react';

import FieldRadio from '../../components/Form/Field/Radio';

export default {
  title: 'Form/Field Radio',
  component: FieldRadio,
};

const Template = (args) => <FieldRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'gender',
  inputLabel: 'Male',
  defaultValue: 0,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  name: 'gender',
  label: 'Gender',
  inputLabel: 'Male',
  defaultValue: 1,
};

export const Checked = Template.bind({});
Checked.args = {
  name: 'gender',
  inputLabel: 'Male',
  checked: true,
};
