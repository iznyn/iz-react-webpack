import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Menu from 'components/Menu';
import Dropdown from 'components/Menu/Dropdown';

export default {
  title: 'Menu/Dropdown',
  component: Dropdown,
};

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

const Template = () => (
  <BrowserRouter>
    <Dropdown selected={<strong>My Menu</strong>}>
      <Menu data={MenuData} />
    </Dropdown>
  </BrowserRouter>
);

export const Default = Template.bind({});
