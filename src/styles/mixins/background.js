/**
 * Background
 */
export const background = (
  image = null,
  size = 'cover',
  repeat = 'no-repeat',
  position = '0 0',
  color = null,
) => {
  const styles = {};

  if (color) {
    styles.backgroundColor = color;
  }

  if (image) {
    styles.backgroundImage = `url(${image})`;
  }

  if (repeat) {
    styles.backgroundRepeat = repeat;
  }

  if (position) {
    styles.backgroundPosition = position;
  }

  if (size) {
    styles.backgroundSize = size;
  }

  return styles;
};

export const cover = (
  image = null,
  size = 'cover',
  zIndex = null,
  position = 'absolute',
) => {
  const styles = {
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  if (image) {
    styles.backgroundImage = `url(${image})`;
  }

  if (size) {
    styles.backgroundSize = size;
  }

  if (zIndex) {
    styles.zIndex = zIndex;
  }

  return styles;
};

export const deco = (
  image,
  width,
  height,
  position,
  size = 'contain',
  zIndex = null,
  opacity = 1,
) => {
  const styles = {
    width,
    height,
    backgroundColor: 'transparent',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: size,
    opacity,
    ...position,
  };

  if (zIndex) {
    styles.zIndex = zIndex;
  }

  return styles;
};

/**
 * Background shortcode
 */
export const bg = background;
export const cov = cover;
