/**
 * components/Slider/Loader.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'components/Spinner';

const SliderLoader = ({ loader }) => (
  <div className="slider__loader">
    {loader ? (
      <>{loader}</>
    ) : (
      <>
        <div className="slider__loader__icon">
          <Spinner />
        </div>
        <div className="slider__loader__label">Loading...</div>
      </>
    )}
  </div>
);

SliderLoader.propTypes = {
  loader: PropTypes.node,
};

export default SliderLoader;
