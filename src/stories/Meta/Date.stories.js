import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MetaDate from 'components/Meta/Date';

export default {
  title: 'Meta/Date',
  component: MetaDate,
};

const Template = (args) => (
  <BrowserRouter>
    <MetaDate {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  date: '2021-04-05 10:34:11',
  link: 'http://iznyn.co/',
  isLinkOutside: true,
};

export const HideIcon = Template.bind({});
HideIcon.args = {
  date: '2021-04-05 10:34:11',
  link: 'http://iznyn.co/',
  isLinkOutside: true,
  hideIcon: true,
};

export const InternalLink = Template.bind({});
InternalLink.args = {
  date: '2021-04-05 10:34:11',
  link: '/post/date',
};

export const CustomFormat = Template.bind({});
CustomFormat.args = {
  date: '2021-04-05 10:34:11',
  link: '/post/date',
  dateFormat: 'yyyy, MMMM dd',
};
