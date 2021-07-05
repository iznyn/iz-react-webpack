/**
 * components/Slider/Main.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactSlick from 'react-slick';

const SliderMain = (props) => {
  const { settings, children, sliderRef } = props;

  const sliderSettings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...settings,
  };

  if (sliderRef) {
    sliderSettings.ref = sliderRef;
  }

  return (
    <div className="slider__main">
      <ReactSlick {...sliderSettings}>{children}</ReactSlick>
    </div>
  );
};

SliderMain.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
  sliderRef: PropTypes.func,
};

export default SliderMain;
