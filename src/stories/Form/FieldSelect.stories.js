import React from 'react';

import FieldSelect from '../../components/Form/Field/Select';

export default {
  title: 'Form/Field Select',
  component: FieldSelect,
};

const Template = (args) => <FieldSelect {...args} />;

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
