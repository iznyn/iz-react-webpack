/**
 * CSS generator helper
 */
import { getSize } from '../mixins/helpers';

/**
 * Get space value
 */
export function getSpace(value) {
  let space = '';
  const values = value.split('|');
  if (values.length === 1) {
    space = getSize(value);
  } else {
    const sizes = [];
    values.forEach(val => {
      sizes.push(getSize(val));
    });
    space = sizes.join(' ');
  }

  return space;
}
