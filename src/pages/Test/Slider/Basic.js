/**
 * pages/Test/Confirm/index.js
 */

import React from 'react';
import Slider from 'components/Slider';

import Image1 from './Assets/Astronomy.jpg';
import Image2 from './Assets/Black.jpg';
import Image3 from './Assets/Books.jpg';
import Image4 from './Assets/Pencils.jpg';
import Image5 from './Assets/Sea.jpg';

const TestSliderBasic = () => (
  <div className="root">
    <div style={{ padding: 40 }}>
      <div className="test__form">
        <h1 style={{ marginBottom: 30 }}>Test Slider Basic</h1>
        <div
          style={{
            marginTop: 30,
          }}
        >
          <Slider>
            <div className="slider__item">
              <div className="slider__image thumbnail">
                <img src={Image1} alt="" />
              </div>
            </div>
            <div className="slider__item">
              <div className="slider__image thumbnail">
                <img src={Image2} alt="" />
              </div>
            </div>
            <div className="slider__item">
              <div className="slider__image thumbnail">
                <img src={Image3} alt="" />
              </div>
            </div>
            <div className="slider__item">
              <div className="slider__image thumbnail">
                <img src={Image4} alt="" />
              </div>
            </div>
            <div className="slider__item">
              <div className="slider__image thumbnail">
                <img src={Image5} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  </div>
);

export default TestSliderBasic;
