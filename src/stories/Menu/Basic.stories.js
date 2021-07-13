import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Menu from 'components/Menu';

export default {
  title: 'Basic / Menu',
  component: Menu,
};

const Template = (args) => (
  <BrowserRouter>
    <Menu {...args} />
  </BrowserRouter>
);

const MenuData = [
  {
    id: 'menu-dashboard',
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    id: 'menu-about',
    label: 'About',
    path: '/about',
    sub: [
      {
        id: 'menu-about-us',
        label: 'About Us',
        path: '/about/us',
      },
      {
        id: 'menu-vision-mision',
        label: 'Vision & Mision',
        path: '/vision-mision',
      },
      {
        id: 'menu-history',
        label: 'Our History',
        path: '/our-history',
      },
    ],
  },
  {
    id: 'menu-blog',
    label: 'Blog',
    path: '/blog',
  },
  {
    id: 'menu-contact',
    label: 'Contact',
    path: '/contact',
  },
];

export const Default = Template.bind({});
Default.args = {
  data: MenuData,
};
