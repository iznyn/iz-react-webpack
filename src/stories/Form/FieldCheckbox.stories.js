import React from 'react';

import FieldCheckbox from '../../components/Form/Field/Checkbox';

export default {
  title: 'Form/Field Checkbox',
  component: FieldCheckbox,
};

const Template = (args) => <FieldCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'agreement',
  inputLabel: 'Do you agree with our terms & conditions?',
  defaultValue: 0,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  name: 'agreement',
  label: 'Agreement',
  inputLabel: 'Do you agree with our terms & conditions?',
  defaultValue: 1,
};

export const Checked = Template.bind({});
Checked.args = {
  name: 'agreement',
  label: 'Agreement',
  inputLabel: 'Do you agree with our terms & conditions?',
  checked: true,
};
