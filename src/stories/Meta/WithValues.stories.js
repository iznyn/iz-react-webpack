import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IoPricetags } from 'react-icons/io5';

import WithValues from 'components/Meta/WithValues';

export default {
  title: 'Meta/With Values',
  component: WithValues,
};

const Template = (args) => (
  <BrowserRouter>
    <WithValues {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  values: [
    {
      label: 'Technology',
      link: '/tag/technology',
    },
    {
      label: 'Internet',
      link: '/tag/internet',
    },
    {
      label: 'Web',
      link: '/tag/web',
    },
  ],
  icon: <IoPricetags />,
};

export const WithMax = Template.bind({});
WithMax.args = {
  values: [
    {
      label: 'Technology',
      link: '/tag/technology',
    },
    {
      label: 'Internet',
      link: '/tag/internet',
    },
    {
      label: 'Web',
      link: '/tag/web',
    },
    {
      label: 'Culture',
      link: '/tag/culture',
    },
  ],
  icon: <IoPricetags />,
  maxCount: 2,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  values: [
    {
      label: 'Technology',
      link: '/tag/technology',
    },
    {
      label: 'Internet',
      link: '/tag/internet',
    },
    {
      label: 'Web',
      link: '/tag/web',
    },
    {
      label: 'Culture',
      link: '/tag/culture',
    },
  ],
  maxCount: 2,
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  values: [
    {
      label: 'Technology',
      link: 'http://tag.com/technology',
    },
    {
      label: 'Internet',
      link: 'http://tag.com/internet',
    },
  ],
  icon: <IoPricetags />,
};
