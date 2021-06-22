import React from 'react';

import FieldText from '../../components/Form/Field/Text';

export default {
  title: 'Form/Field Text',
  component: FieldText,
};

const Template = (args) => <FieldText {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'name',
  label: 'Your Name',
  value: 'Arif',
  placeholder: 'Your Name',
};
