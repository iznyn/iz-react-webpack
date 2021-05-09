/**
 * Get css
 */
import getPaddingProp from './padding';

function getCss(keyword, value) {
  let css = {};
  if (keyword.indexOf('p') === 0) {
    css = getPaddingProp(keyword, value);
  }

  return css;
}

export default getCss;
