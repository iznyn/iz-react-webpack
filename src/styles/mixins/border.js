/**
 * Border
 */
import { getSize } from './helpers';

const border = (
  color,
  size = 1,
  style = 'solid',
  side = 'all',
  radius = null,
) => {
  const styles = {
    borderColor: color,
    borderStyle: style,
  };
  const width = getSize(size);

  if (side === 'top') {
    styles.borderTopWidth = width;
  } else if (side === 'right') {
    styles.borderRightWidth = width;
  } else if (side === 'left') {
    styles.borderLeftWidth = width;
  } else if (side === 'bottom') {
    styles.borderBottomWidth = width;
  } else if (side === 'vertical') {
    styles.borderTopWidth = width;
    styles.borderBottomWidth = width;
  } else if (side === 'horizontal') {
    styles.borderLeftWidth = width;
    styles.borderRightWidth = width;
  } else {
    styles.borderWidth = width;
  }

  if (radius) {
    styles.borderRadius = radius;
  }
  return styles;
};

export default border;
