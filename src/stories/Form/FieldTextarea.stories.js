import React from 'react';

import FieldTextarea from '../../components/Form/Field/Textarea';

export default {
  title: 'Form/Field Textarea',
  component: FieldTextarea,
};

const Template = (args) => <FieldTextarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'content',
  label: 'Your Content',
  value: 'This is my content',
  placeholder: 'Your Content',
};
