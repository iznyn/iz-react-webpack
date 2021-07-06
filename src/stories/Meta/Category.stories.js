import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MetaCategory from 'components/Meta/Category';

export default {
  title: 'Meta/Category',
  component: MetaCategory,
};

const Template = (args) => (
  <BrowserRouter>
    <MetaCategory {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  category: 'Technology',
  link: 'http://iznyn.co/',
  isLinkOutside: true,
};

export const HideIcon = Template.bind({});
HideIcon.args = {
  category: 'Technology',
  link: 'http://iznyn.co/',
  isLinkOutside: true,
  hideIcon: true,
};

export const InternalLink = Template.bind({});
InternalLink.args = {
  category: 'Technology',
  link: '/post/category',
};

export const LongText = Template.bind({});
LongText.args = {
  category: 'Super Contemporer Technology',
  link: '/post/category',
};

export const NoMaxChars = Template.bind({});
NoMaxChars.args = {
  category: 'Super Contemporer Technology',
  link: '/post/category',
  maxChars: false,
};
