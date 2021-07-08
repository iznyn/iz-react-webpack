/**
 * components/Thumbnail/SizeRatio.js
 */
import React, { useLayoutEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Base from './index';

const SizeRatio = (props) => {
  const { imagePath, imageProps, bottom, minHeight, ...others } = props;

  const thumbRef = useRef(null);
  const [height, setHeight] = useState('auto');
  const [width, setWidth] = useState('100%');

  useLayoutEffect(() => {
    const updateSize = () => {
      if (thumbRef.current) {
        const thumbEl = thumbRef.current;
        const thumbWidth = thumbEl.offsetWidth;
        let thumbHeight = window.innerHeight;

        if (bottom) {
          thumbHeight -= bottom;
        }

        if (minHeight && thumbHeight < minHeight) {
          thumbHeight = minHeight;
        }
        setHeight(thumbHeight);
        setWidth(thumbWidth);
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    // Unmount
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <Base
      imagePath={imagePath}
      ref={thumbRef}
      imageProps={{ width, height, ...imageProps }}
      {...others}
    />
  );
};

SizeRatio.propTypes = {
  imagePath: PropTypes.string.isRequired,
  imageProps: PropTypes.object,
  bottom: PropTypes.number,
  minHeight: PropTypes.number,
};

export default SizeRatio;
