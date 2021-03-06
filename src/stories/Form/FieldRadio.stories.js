import React from 'react';

import FieldRadio from '../../components/Form/Field/Radio';

export default {
  title: 'Form/Field Radio',
  component: FieldRadio,
};

const Template = (args) => <FieldRadio {...args} />;

const options = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
];
export const Default = Template.bind({});
Default.args = {
  name: 'gender',
  data: options,
  defaultValue: 'female',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  name: 'gender',
  label: 'Gender',
  data: options,
  defaultValue: 'male',
};
