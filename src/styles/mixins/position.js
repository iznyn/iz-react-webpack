import { getSize } from './helpers';

/**
 * Position
 */
const position = (
  type = 'static',
  top = null,
  right = null,
  bottom = null,
  left = null,
) => {
  const styles = {
    position: type,
  };

  if (top !== null) {
    styles.top = getSize(top);
  }

  if (right !== null) {
    styles.right = getSize(right);
  }

  if (bottom !== null) {
    styles.bottom = getSize(bottom);
  }

  if (left !== null) {
    styles.left = getSize(left);
  }

  return styles;
};

/**
 * Position shortcode
 */
export const pos = position;
export const poa = (top = null, right = null, bottom = null, left = null) =>
  position('absolute', top, right, bottom, left);
export const poaf = () => poa(0, 0, 0, 0);

export const pof = (top = null, right = null, bottom = null, left = null) =>
  position('fixed', top, right, bottom, left);
export const poff = () => pof(0, 0, 0, 0);

export const por = (top = null, right = null, bottom = null, left = null) =>
  position('relative', top, right, bottom, left);

export default position;
