import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Slider from 'components/Slider';

export default {
  title: 'Slider / Basic',
  component: Slider,
};

const Template = (args) => (
  <BrowserRouter>
    <Slider {...args}>
      <div className="slider__item">
        <div className="slider__image thumbnail__image">
          <img src="https://placeimg.com/1000/480/any" alt="" />
        </div>
      </div>
      <div className="slider__item">
        <div className="slider__image thumbnail__image">
          <img src="https://placeimg.com/1000/480/any" alt="" />
        </div>
      </div>
      <div className="slider__item">
        <div className="slider__image thumbnail__image">
          <img src="https://placeimg.com/1000/480/any" alt="" />
        </div>
      </div>
      <div className="slider__item">
        <div className="slider__image thumbnail__image">
          <img src="https://placeimg.com/1000/480/any" alt="" />
        </div>
      </div>
      <div className="slider__item">
        <div className="slider__image thumbnail__image">
          <img src="https://placeimg.com/1000/480/any" alt="" />
        </div>
      </div>
    </Slider>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
