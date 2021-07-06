import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Card from 'components/Card';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => (
  <BrowserRouter>
    <div style={{ width: '40%' }}>
      <Card {...args} />
    </div>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  className: 'card__post',
  title: 'Example Post',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nulla et velit mollis luctus.',
  thumbnail: 'https://placeimg.com/480/480/nature',
  link: '/post/1',
  infoProps: {
    readMore: {},
  },
};
