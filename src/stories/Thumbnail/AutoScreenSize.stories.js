import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Thumbnail from 'components/Thumbnail/AutoScreenSize';

export default {
  title: 'Thumbnail / Auto Screen Size',
  component: Thumbnail,
};

const Template = (args) => (
  <BrowserRouter>
    <Thumbnail {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  imagePath: 'https://placeimg.com/1000/480/any',
  defaultWindowWidth: 1440,
  defaultWidth: 300,
  defaultHeight: 400,
};

export const SetAlt = Template.bind({});
SetAlt.args = {
  imagePath: 'https://placeimg.com/1000/480/any',
  imageProps: {
    altText: 'Test Image',
  },
  defaultWindowWidth: 1440,
  defaultWidth: 300,
  defaultHeight: 400,
};

export const WithLink = Template.bind({});
WithLink.args = {
  imagePath: 'https://placeimg.com/1000/480/any',
  link: '/post/1',
  imageProps: {
    altText: 'Test Image',
  },
  defaultWindowWidth: 1440,
  defaultWidth: 300,
  defaultHeight: 400,
};

export const WithLinkOutside = Template.bind({});
WithLinkOutside.args = {
  imagePath: 'https://placeimg.com/1000/480/any',
  link: 'http://example.com/post/1',
  isLinkOutside: true,
  imageProps: {
    altText: 'Test Image',
  },
  defaultWindowWidth: 1440,
  defaultWidth: 300,
  defaultHeight: 400,
};

export const WithAction = Template.bind({});
WithAction.args = {
  imagePath: 'https://placeimg.com/1000/480/any',
  imageProps: {
    altText: 'Test Image',
  },
  action: (
    <span>
      <a
        className="button button--md button--primary"
        href="http://example.com/post/1"
        target="_blank"
      >
        Read More
      </a>
    </span>
  ),
  defaultWindowWidth: 1440,
  defaultWidth: 300,
  defaultHeight: 400,
};
