/**
 * components/Thumbnail/AutoScreenSize.js
 */
import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Base from './index';

const AutoScreenSize = (props) => {
  const {
    imagePath,
    defaultWindowWidth,
    defaultWidth,
    defaultHeight,
    minWidth,
    minHeight,
    ...others
  } = props;

  const [height, setHeight] = useState('auto');
  const [width, setWidth] = useState('100%');

  useLayoutEffect(() => {
    const updateSize = () => {
      const winWidth = window.innerWidth;
      let thumbWidth = (winWidth * defaultWidth) / defaultWindowWidth;
      let thumbHeight = (winWidth * defaultHeight) / defaultWindowWidth;

      if (minWidth && thumbWidth < minWidth) {
        thumbWidth = minWidth;
      }
      if (minHeight && thumbHeight < minHeight) {
        thumbHeight = minHeight;
      }
      setHeight(thumbHeight);
      setWidth(thumbWidth);
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    // Unmount
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return <Base imagePath={imagePath} style={{ width, height }} {...others} />;
};

AutoScreenSize.propTypes = {
  imagePath: PropTypes.string.isRequired,
  defaultWindowWidth: PropTypes.number.isRequired,
  defaultWidth: PropTypes.number.isRequired,
  defaultHeight: PropTypes.number.isRequired,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
};

export default AutoScreenSize;
