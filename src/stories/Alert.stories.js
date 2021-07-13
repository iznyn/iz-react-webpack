import React from 'react';

import Alert from 'components/Alert';

export default {
  title: 'Basic / Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args}>Alert message</Alert>;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Success = Template.bind({});

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
};
