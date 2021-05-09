/**
 * Helpers
 */
import {
  MEDIA_XXL,
  MEDIA_XL,
  MEDIA_LG,
  MEDIA_SLG,
  MEDIA_XMD,
  MEDIA_MD,
  MEDIA_SM,
  MEDIA_XS,
  MEDIA_XXS,
} from './config';

/**
 * Get responsive media
 */
export function getMedia(name) {
  switch (name) {
    case 'xxl': {
      return MEDIA_XXL;
    }
    case 'xl': {
      return MEDIA_XL;
    }
    case 'lg': {
      return MEDIA_LG;
    }
    case 'slg': {
      return MEDIA_SLG;
    }
    case 'xmd': {
      return MEDIA_XMD;
    }
    case 'md': {
      return MEDIA_MD;
    }
    case 'sm': {
      return MEDIA_SM;
    }
    case 'xs': {
      return MEDIA_XS;
    }
    case 'xxs': {
      return MEDIA_XXS;
    }
    default: {
      return name;
    }
  }
}

/**
 * Get responsive media query
 */
export function getMediaQuery(min = null, max = null) {
  let query = '@media';
  if (min && min !== 0) {
    query += ` (min-width: ${getSize(min)})`;
  }
  if (max && max !== 0) {
    if (min && min !== 0) {
      query += ` and`;
    }
    query += ` (max-width: ${getSize(max)})`;
  }

  return query;
}

/**
 * Get size
 */
export function getSize(size) {
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(size) && size !== 0) {
    return `${size}px`;
  }
  return size;
}
