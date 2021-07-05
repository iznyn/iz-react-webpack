/**
 * components/Slider/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';

const SliderItems = (props) => {
  const { key, data, onRenderItem } = props;

  return (
    <>
      {data.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`${key}-${index}`} className="slider__item">
          {onRenderItem(item)}
        </div>
      ))}
    </>
  );
};

SliderItems.propTypes = {
  key: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onRenderItem: PropTypes.func.isRequired,
};

export default SliderItems;
