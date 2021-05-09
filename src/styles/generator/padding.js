/**
 * Get padding prop
 */
import { getSpace } from './helpers';

function getProp(keyword, value) {
  const prop = {};
  let attr = '';
  switch (keyword) {
    case 'pl': {
      attr = 'paddingLeft';
      break;
    }
    case 'pr': {
      attr = 'paddingRight';
      break;
    }
    case 'pt': {
      attr = 'paddingTop';
      break;
    }
    case 'pb': {
      attr = 'paddingBottom';
      break;
    }
    default: {
      attr = 'padding';
    }
  }

  prop[attr] = getSpace(value);
  return prop;
}

export default getProp;
