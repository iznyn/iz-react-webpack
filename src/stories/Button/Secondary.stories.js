/* eslint-disable no-alert */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IoBulb } from 'react-icons/io5';

import Button from 'components/Button';

export default {
  title: 'Button / Secondary',
  component: Button,
};

const variant = 'secondary';
const BaseTemplate = (args) => <Button {...args} variant={variant} />;

const Template = (args) => (
  <BrowserRouter>
    <BaseTemplate {...args} />
  </BrowserRouter>
);

export const Basic = Template.bind({});
Basic.args = {
  path: '/post/1',
  label: 'Click Me',
};

export const LinkOutside = Template.bind({});
LinkOutside.args = {
  path: 'http://example.com/post/1',
  isLinkOutside: true,
  label: 'Click Me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  path: '/post/1',
  label: 'Click Me',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  path: '/post/1',
  label: 'Click Me',
  loading: true,
};

export const CustomHandler = Template.bind({});
CustomHandler.args = {
  path: '/post/1',
  label: 'Click Me',
  handler: (evt) => {
    evt.preventDefault();
    alert('Hello Worlds!!!');
  },
};

export const Size = (args) => (
  <BrowserRouter>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} size="xxs" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} size="xs" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} size="sm" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} size="lg" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} size="xl" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} size="xxl" />
      </div>
    </div>
  </BrowserRouter>
);
Size.args = {
  path: '/post/1',
  label: 'Click Me',
};

export const Radius = (args) => (
  <BrowserRouter>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="none" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="xxs" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="xs" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="sm" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="md" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="lg" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="xl" size="lg" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="xxl" size="xl" />
      </div>
    </div>
  </BrowserRouter>
);
Radius.args = {
  path: '/post/1',
  label: 'Click Me',
};

const TemplateWithIcon = (args) => (
  <BrowserRouter>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} size="xxs" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} size="xs" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} size="sm" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} size="lg" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} size="xl" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} size="xxl" />
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="none" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="xxs" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="xs" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="sm" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="md" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="lg" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="xl" size="lg" />
      </div>
      <div style={{ marginRight: 10 }}>
        <BaseTemplate {...args} radius="xxl" size="xl" />
      </div>
    </div>
  </BrowserRouter>
);

export const WithIconLeft = TemplateWithIcon.bind({});
WithIconLeft.args = {
  path: '/post/1',
  label: 'Click Me',
  icon: <IoBulb />,
};

export const WithIconRight = TemplateWithIcon.bind({});
WithIconRight.args = {
  path: '/post/1',
  label: 'Click Me',
  icon: <IoBulb />,
  iconPosition: 'right',
};
