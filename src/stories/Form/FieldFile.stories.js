import React from 'react';

import FieldFile from '../../components/Form/Field/File';

export default {
  title: 'Form/Field File',
  component: FieldFile,
};

const Template = (args) => <FieldFile {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'document',
  label: 'Document',
  inputLabel: 'Upload Document',
};
