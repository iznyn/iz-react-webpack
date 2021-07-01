import React from 'react';

import FieldImage from '../../components/Form/Field/Image';
import FieldImageWithCrop from '../../components/Form/Field/Image/WithCrop';

export default {
  title: 'Form/Field Image',
  component: FieldImage,
};

const Template = (args) => <FieldImage {...args} />;
const TemplateWithCrop = (args) => <FieldImageWithCrop {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'profile_image',
  label: 'Profile Image',
  buttonLabel: 'Change Image',
  defaultImage:
    'https://dummyimage.com/600x600/b0b0b0/ffffff.jpg&text=No+Image',
  info: 'Maximum file size is 2MB.',
};

export const Inside = Template.bind({});
Inside.args = {
  name: 'profile_image',
  label: 'Profile Image',
  defaultImage:
    'https://dummyimage.com/600x600/b0b0b0/ffffff.jpg&text=No+Image',
  inputProps: {
    insideAction: true,
  },
};

export const WithCrop = TemplateWithCrop.bind({});
WithCrop.args = {
  name: 'profile_image',
  label: 'Profile Image',
  defaultImage:
    'https://dummyimage.com/600x600/b0b0b0/ffffff.jpg&text=No+Image',
};

export const WithCropInside = TemplateWithCrop.bind({});
WithCropInside.args = {
  name: 'profile_image',
  label: 'Profile Image',
  defaultImage:
    'https://dummyimage.com/600x600/b0b0b0/ffffff.jpg&text=No+Image',
  inputProps: {
    insideAction: true,
  },
};
