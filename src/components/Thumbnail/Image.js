/**
 * components/Thumbnail/Image.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import LoaderImage from 'components/Loader/Image';

const Image = (props) => {
  const { path, altText, width, height } = props;
  const styles = {};
  if (width) {
    styles.width = width;
  }
  if (height) {
    styles.height = height;
  }

  return (
    <div className="thumbnail__image" style={styles}>
      <LazyLoad
        height={height || 140}
        once
        placeholder={<LoaderImage style={{ height: height || 140 }} />}
      >
        <img src={path} alt={altText} />
      </LazyLoad>
    </div>
  );
};

Image.defaultProps = {
  altText: '',
};

Image.propTypes = {
  path: PropTypes.string.isRequired,
  altText: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Image;
