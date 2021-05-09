import { getMedia, getMediaQuery } from './helpers';

/**
 * Rsp
 */
export const media = (size, props) => {
  const attr = getMedia(size);
  const styles = {};
  styles[attr] = props;
  return styles;
};

/**
 * Rsp size
 */
export const mediaQuery = (min, max, props) => {
  const attr = getMediaQuery(min, max);
  const styles = {};
  styles[attr] = props;
  return styles;
};

/**
 * Shortcode
 */
export const md = media;
export const mdq = mediaQuery;
